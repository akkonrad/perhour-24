import {ChangeDetectionStrategy, Component, effect, EventEmitter, inject, input, Output} from '@angular/core';
import {FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormField, MatHint, MatLabel} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatInput} from "@angular/material/input";
import {NgForOf} from "@angular/common";
import {filter, tap} from "rxjs";
import {MatButton, MatIconButton, MatMiniFabButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatTooltip} from "@angular/material/tooltip";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {Currency, Period, RateChange} from "../../models/rate.type";

const HOURS_IN_DAY = 8;
const HOURS_IN_MONTH = 168;
const HOURS_IN_YEAR = 2016;

const DAYS_IN_MONTH = 21;

/* TODO:
    - form has fields:
      - add named templates for the bottom text (daily/hourly/monthly/yearly)
      - add a template for button/actions
      - add animation on appearing
      - add aria label everywhere
 */
@Component({
  selector: 'app-currency-selector',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, MatFormField, MatSelect, MatOption, MatInput, NgForOf, MatButton, MatIcon, MatMiniFabButton, MatTooltip, MatLabel, MatHint, MatIconButton],
  templateUrl: './currency-selector.component.html',
  styleUrl: './currency-selector.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrencySelectorComponent {

  currency = input<Currency>('Currency');
  currencyInUsd = input<number>(1); // use state instead?
  currentUserRate = input<RateChange>();

  @Output()
  rateChange = new EventEmitter<RateChange>();

  private fb = inject(NonNullableFormBuilder);

  form = this.fb.group({
    hourly: [1, [Validators.required]],
    daily: [HOURS_IN_DAY, [Validators.required]],
    monthly: [HOURS_IN_MONTH, [Validators.required]],
    yearly: [HOURS_IN_YEAR, [Validators.required]],
  });

  constructor() {
    this.watchHourChange();
    this.watchDailyChange();
    this.watchMonthlyChange();
    this.watchYearlyChange();
    this.watchCurrentUserRateChange();
  }

  private watchHourChange(): void {
    this.form.get('hourly')!.valueChanges.pipe(
      takeUntilDestroyed(),
      filter(value => !isNaN(value)),
      tap((value: number) => this.patchFormByValue(value, 'hourly')),
      tap(value => this.emitRateChange(value, 'hourly'))
    )
      .subscribe();
  }

  private watchDailyChange(): void {
    this.form.get('daily')!.valueChanges.pipe(
      takeUntilDestroyed(),
      filter(value => !isNaN(value)),
      tap((value: number) => this.patchFormByValue(value, 'daily')),
      tap(value => this.emitRateChange(value, 'daily'))
    )
      .subscribe();
  }

  private watchMonthlyChange(): void {
    this.form.get('monthly')!.valueChanges.pipe(
      takeUntilDestroyed(),
      filter(value => !isNaN(value)),
      tap((value: number) => this.patchFormByValue(value, 'monthly')),
      tap(value => this.emitRateChange(value, 'monthly'))
    )
      .subscribe();
  }

  private watchYearlyChange(): void {
    this.form.get('yearly')!.valueChanges.pipe(
      takeUntilDestroyed(),
      filter(value => !isNaN(value)),
      tap((value: number) => this.patchFormByValue(value, 'yearly')),
      tap(value => this.emitRateChange(value, 'yearly'))
    )
      .subscribe();
  }

  private patchFormByValue(value: number, period: Period): void {
    let patchValues = {
      hourly: value / HOURS_IN_DAY,
      daily: value * HOURS_IN_DAY,
      monthly: value * HOURS_IN_MONTH,
      yearly: value * HOURS_IN_YEAR,
    };
    switch (period) {
      case 'hourly':
        patchValues = {
          hourly: value,
          daily: value * HOURS_IN_DAY,
          monthly: value * HOURS_IN_MONTH,
          yearly: value * HOURS_IN_YEAR,
        };
        break;
      case 'daily':
        patchValues = {
          hourly: value / HOURS_IN_DAY,
          daily: value,
          monthly: value * DAYS_IN_MONTH,
          yearly: value * HOURS_IN_YEAR / 8,
        };
        break;
      case 'monthly':
        patchValues = {
          hourly: value / HOURS_IN_MONTH,
          daily: value / DAYS_IN_MONTH,
          monthly: value,
          yearly: value * 12,
        };
        break;
      case 'yearly':
        patchValues = {
          hourly: value / HOURS_IN_YEAR,
          daily: value / HOURS_IN_YEAR * 8,
          monthly: value / 12,
          yearly: value,
        };
        break;
    }
    this.form.patchValue(patchValues, {emitEvent: false});
  }

  private emitRateChange(value: number, period: Period): void {
    this.rateChange.emit({
      currency: this.currency(),
      period,
      value
    });
  }

  private watchCurrentUserRateChange(): void {
    effect(() => {
      const change = this.currentUserRate();
      if (!change) {
        return;
      }

      const {currency, value, period} = change;

      if (currency === this.currency()) {
        return;
      }

      const valueInUsd = this.currencyInUsd();

      const newValue = value * valueInUsd;

      this.form.get(period)!.setValue(newValue);
    });
  }
}
