import {Component, computed, effect, signal} from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatAutocomplete, MatAutocompleteSelectedEvent, MatAutocompleteTrigger} from "@angular/material/autocomplete";
import {MatOption} from "@angular/material/select";
import {MatInput} from "@angular/material/input";
import {JsonPipe} from "@angular/common";
import {MatChip, MatChipRemove, MatChipSet} from "@angular/material/chips";
import {MatIcon} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {Currency} from "../../models/rate.type";

@Component({
  selector: 'app-currency-filter',
  standalone: true,
  imports: [
    MatLabel,
    MatAutocomplete,
    MatFormField,
    MatInput,
    MatOption,
    MatAutocompleteTrigger,
    JsonPipe,
    MatIcon,
    MatChipSet,
    MatChip,
    MatChipRemove,
    FormsModule
  ],
  templateUrl: './currency-filter.component.html',
  styleUrl: './currency-filter.component.scss'
})
export class CurrencyFilterComponent {

  keyword = '';

  // TODO: use from storage
  allCurrencies = signal<Currency[]>(['EUR', 'GBP', 'CHF', 'PLN'])

  // TODO: save into state as well
  selectedCurrencies = signal<Currency[]>([]);

  filteredCurrencies = computed<Currency[]>(() => {
    return this.allCurrencies().filter(currency => {
      return this.allCurrencies().includes(currency) && !this.selectedCurrencies().includes(currency);
    })
  })

  constructor() {
    effect(() => {
      console.log('selectedCurrencies changed', this.selectedCurrencies());
    })
  }

  onOptionSelected(event: MatAutocompleteSelectedEvent): void {
    this.selectedCurrencies.update(value => [...value, event.option.value]);
    this.keyword = '';
  }

  removeOption(option: string): void {
    this.selectedCurrencies.update(value => value.filter(currency => currency !== option))
  }

}
