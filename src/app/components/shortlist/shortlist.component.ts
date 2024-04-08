import {Component, signal} from '@angular/core';
import {Rate} from "../../models/rate.type";
import {CurrencySelectorComponent} from "../currency-selector/currency-selector.component";

@Component({
  selector: 'app-shortlist',
  standalone: true,
  imports: [
    CurrencySelectorComponent
  ],
  templateUrl: './shortlist.component.html',
  styleUrl: './shortlist.component.scss'
})
export class ShortlistComponent {
  shortlistRates = signal<Rate[]>([
    {
      currency: 'PLN',
      hourly: 195,
      daily: 195*8,
      monthly: 195*168,
      yearly: 195*2000,
      usd: 4
    },
    {
      currency: 'GBP',
      hourly: 100,
      daily: 800,
      monthly: 16800,
      yearly: 2000,
      usd: 0.5
    },
  ])
}
