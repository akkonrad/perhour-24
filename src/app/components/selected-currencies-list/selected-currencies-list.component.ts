import {Component, signal} from '@angular/core';
import {Rate} from "../../models/rate.type";
import {CurrencySelectorComponent} from "../currency-selector/currency-selector.component";

@Component({
  selector: 'app-selected-currencies-list',
  standalone: true,
  imports: [
    CurrencySelectorComponent
  ],
  templateUrl: './selected-currencies-list.component.html',
  styleUrl: './selected-currencies-list.component.scss'
})
export class SelectedCurrenciesListComponent {
  selectedRates = signal<Rate[]>([
    {
      currency: 'PLN',
      hourly: 100,
      daily: 800,
      monthly: 16800,
      yearly: 2000,
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
