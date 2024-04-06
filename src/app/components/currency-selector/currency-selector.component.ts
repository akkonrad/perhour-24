import {ChangeDetectionStrategy, Component, inject, Inject} from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatInput} from "@angular/material/input";
import {NgForOf} from "@angular/common";

/* TODO:
    - form has fields:
      - selected currency
      - inputs: hourly/daily/monthly/yearly
      - on each change it recalculates the value and updates the other fields
      - after update other fields, it sets the rate in the state

   */

@Component({
  selector: 'app-currency-selector',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, MatFormField, MatSelect, MatOption, MatInput, NgForOf],
  templateUrl: './currency-selector.component.html',
  styleUrl: './currency-selector.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class CurrencySelectorComponent {

  private fb = inject(FormBuilder)

  form = this.fb.group({
    currency: ['USD'],
    hourly: [1],
    daily: [8],
    monthly: [21],
    yearly: [2000],
  });

  // TODO: use real value
  currencies = ['USD', 'EUR', 'GBP', 'CHF', 'PLN']

  onSubmit() {
    console.log(this.form.value);
  }

}
