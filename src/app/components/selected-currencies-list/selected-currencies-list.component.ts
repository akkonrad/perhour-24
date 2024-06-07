import {Component, inject} from '@angular/core';
import {CurrencySelectorComponent} from "../currency-selector/currency-selector.component";
import {RatesStore} from "../../store/rates.store";

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
  readonly store = inject(RatesStore);

  constructor() {
  }
}
