import {Currency, ExchangeRate} from "../models/rate.type";
import {computed, inject, InjectionToken} from "@angular/core";
import {patchState, signalStore, withComputed, withHooks, withMethods, withState} from "@ngrx/signals";
import {rxMethod} from "@ngrx/signals/rxjs-interop";
import {CurrencyService} from "../services/currency.service";
import {pipe, switchMap, tap} from "rxjs";
import {tapResponse} from "@ngrx/operators";

interface RatesState {
  selectedCurrencies: Currency[];
  updated: Date | null;
  allCurrencies: ExchangeRate | null;
  isLoading: boolean;
};

const initialState: RatesState = {
  updated: null,
  selectedCurrencies: ['USD'],
  allCurrencies: null,
  isLoading: true,
}

const RATES_STATE = new InjectionToken<RatesState>('RatesStore', {
  factory: () => initialState,
});


/*
  TODO:
  - extract service call and state update to a separate method: withCurrencies(...)
  - provide handling data from the local storage as a fallback when error, or when it's up to date


  ####################################
  CREATE CLASS BASED SIGNAL STORE

  @Injectable()
  export class CounterStore extends signalStore(withState({ count: 0 })) {
    readonly doubleCount = computed(() => this.count() * 2);

    increment(): void {
      patchState(this, { count: this.count() + 1 });
    }
  }
 */

// const INITIAL_STATE = {
//   count: 0
// }
//
// @Injectable()
// export class RatesStore extends signalStore(withState(INITIAL_STATE)) {
//   readonly doubleCount = computed(() => this.count() * 2);
//
//   increment(): void {
//     patchState(this, { count: this.count() + 1 });
//   }
// }

export const RatesStore = signalStore(
  {providedIn: 'root'},
  withState(() => inject(RATES_STATE)),
  withComputed(({allCurrencies, selectedCurrencies}) => ({
    exchangeRatesOfSelectedCurrencies: computed((): ExchangeRate => {
      const result = {} as ExchangeRate;
      const dict = allCurrencies();
      if (!dict) return result;

      selectedCurrencies().forEach(currency => {
        result[currency] = dict[currency];
      });

      return result;
    }),
  })),
  withMethods((store, service = inject(CurrencyService)) => ({
    addCurrencySelection: (currency: Currency): void => patchState(store, {selectedCurrencies: [...store.selectedCurrencies(), currency]}),
    removeCurrencySelection: (currency: Currency): void => {
      if (currency === 'USD') {
        console.warn('Cannot remove USD from the list');
        return
      }
      ;
      patchState(store, {selectedCurrencies: [...store.selectedCurrencies().filter(curr => curr !== currency)]});
    },
    loadRates: rxMethod(
      pipe(
        tap(() => patchState(store, {isLoading: true})),
        switchMap(() => {
          return service.getCurrencies().pipe(
            tapResponse({
              next: (currencyDto) => {
                const allCurrencies = Object.keys(currencyDto.data).reduce((acc: any, code) => {
                  acc[code] = currencyDto.data[code].value;
                  return acc;
                }, {});
                const updated = new Date(currencyDto.meta.last_updated_at);
                patchState(store, {allCurrencies, updated});
              },
              error: console.error,
              finalize: () => patchState(store, {isLoading: false}),
            })
          );
        })
      )
    )
  })),
  withHooks({
    onInit: (store) => {
      store.loadRates(0);
    },
  })
);

export type RatesStore = InstanceType<typeof RatesStore>;
