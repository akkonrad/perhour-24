import {Component, signal} from '@angular/core';
import {Rate, RateChange} from "../../models/rate.type";
import {CurrencySelectorComponent} from "../currency-selector/currency-selector.component";

@Component({
  selector: 'app-shortlist',
  standalone: true,
  imports: [
    CurrencySelectorComponent,
  ],
  templateUrl: './shortlist.component.html',
  styleUrl: './shortlist.component.scss'
})
export class ShortlistComponent {
  mockCurrencies = signal([
    {
      currency: 'USD',
      rateInUsd: 1
    },
    {
      currency: 'X10',
      rateInUsd: 10
    },
    {
      currency: 'X0.1',
      rateInUsd: 0.1
    }
  ])

  currentUserRate = signal<RateChange | undefined>(undefined);

  shortlistRates = signal<Rate[]>([]);

  onRateChanges(rate: RateChange) {
    this.currentUserRate.set(rate);
  }
}
