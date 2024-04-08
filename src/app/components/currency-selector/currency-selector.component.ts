import {ChangeDetectionStrategy, Component, effect, EventEmitter, inject, input, Output} from '@angular/core';
import {FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatInput} from "@angular/material/input";
import {NgForOf} from "@angular/common";
import {filter, tap} from "rxjs";
import {MatButton, MatMiniFabButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatTooltip} from "@angular/material/tooltip";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {Currency, Rate} from "../../models/rate.type";


/* TODO:
    - form has fields:
      - selected currency
      - inputs: hourly/daily/monthly/yearly
      - on each change it recalculates the value and updates the other fields
      - after update other fields, it sets the rate in the state
      - add readonly mode (for shortlist)
      - add named templates for the bottom text (daily/hourly/monthly/yearly)
      - add a template for button/actions
      - add animation on appearing
      - add aria label everywhere
 */
@Component({
  selector: 'app-currency-selector',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, MatFormField, MatSelect, MatOption, MatInput, NgForOf, MatButton, MatIcon, MatMiniFabButton, MatTooltip, MatLabel],
  templateUrl: './currency-selector.component.html',
  styleUrl: './currency-selector.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrencySelectorComponent {

  currency = input<Currency>('Currency');

  // TODO: on input change update the form
  data = input<Rate>({
    currency: 'USD',
    hourly: 100,
    daily: 800,
    monthly: 16800,
    yearly: 200000,
  });


  @Output()
  add = new EventEmitter<Rate>();

  // TODO: use real values from store
  currencies: Currency[] = ['EUR', 'GBP', 'CHF', 'PLN']

  private fb = inject(NonNullableFormBuilder)

  form = this.fb.group({
    currency: [this.currencies[0], [Validators.required]],
    hourly: [this.data().hourly, [Validators.required]],
    daily: [this.data().daily, [Validators.required]],
    monthly: [this.data().monthly, [Validators.required]],
    yearly: [this.data().yearly, [Validators.required]],
  });

  constructor() {
    // TODO: check if can load initial data from local storage
    this.watchInputChanges();
    this.watchHourChange();
    this.watchDailyChange();
    this.watchMonthlyChange();
    this.watchYearlyChange();
  }

  onSubmit() {
    console.log('>>> SUBMIT: ', this.form.value);
  }

  onAddClicked(): void {
    console.log('>>> ADD ', this.form.value);
    this.add.emit(this.form.value as Rate);
  }

  private watchHourChange(): void {
    this.form.get('hourly')!.valueChanges.pipe(
      takeUntilDestroyed(),
      filter(value => !isNaN(value)),
      tap((value: number) => {
        console.log('hourly', value)
        this.form.patchValue({
          daily: value * 8,
          monthly: value * 168,
          yearly: value * 2000,
        }, {emitEvent: false});
      })
    )
      .subscribe();
  }

  private watchDailyChange(): void {
    this.form.get('daily')!.valueChanges.pipe(
      takeUntilDestroyed(),
      filter(value => !isNaN(value)),
      tap((value: number) => {
        console.log('daily', value)
        this.form.patchValue({
          hourly: value / 8,
          monthly: value * 21,
          yearly: value * 2000,
        }, {emitEvent: false});
      })
    )
      .subscribe();
  }

  private watchMonthlyChange(): void {
    this.form.get('monthly')!.valueChanges.pipe(
      takeUntilDestroyed(),
      filter(value => !isNaN(value)),
      tap((value: number) => {
        console.log('monthly', value);

        this.form.patchValue({
          hourly: value / 168,
          daily: value / 21,
          yearly: value * 2000,
        }, {emitEvent: false});
      })
    )
      .subscribe();
  }

  private watchYearlyChange(): void {
    this.form.get('yearly')!.valueChanges.pipe(
      takeUntilDestroyed(),
      filter(value => !isNaN(value)),
      tap((value: number) => {
        console.log('yearly', value);
        this.form.patchValue({
          hourly: value / 2000,
          daily: value / 21,
          monthly: value / 168,
        }, {emitEvent: false});
      })
    )
      .subscribe();
  }

  private watchInputChanges(): void {
    effect(() => {
      if (this.data().currency === this.currency()) {
        this.form.patchValue(this.data(), {emitEvent: false});
      }
    })
  }

}
