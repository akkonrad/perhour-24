import {Component, signal} from '@angular/core';
import {Rate, RateChange} from "../../models/rate.type";
import {CurrencySelectorComponent} from "../currency-selector/currency-selector.component";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-shortlist',
  standalone: true,
  imports: [
    CurrencySelectorComponent,
    JsonPipe,
  ],
  templateUrl: './shortlist.component.html',
  styleUrl: './shortlist.component.scss'
})
export class ShortlistComponent {
  mockCurrencies = signal([
    {
      currency: 'PLN',
      rateInUsd: 0.26
    },
    {
      currency: 'USD',
      rateInUsd: 1
    },
    {
      currency: 'EUR',
      rateInUsd: 1.08
    },
    {
      currency: 'CHF',
      rateInUsd: 1.12
    },
    {
      currency: 'GBP',
      rateInUsd: 1.27
    }
  ])

  currentUserRate = signal<RateChange>({currency: 'PLN', period: 'hourly', value: 195, valueInUsd: 50.7});

  shortlistRates = signal<Rate[]>([]);

  onRateChanges(rate: RateChange) {
    console.log('%c[ShortlistComponent] onRateChanges', 'color: #333; background: #bada55', rate);
    this.currentUserRate.set(rate);
  }
}
