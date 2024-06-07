export type Currency = string;
export type AmountUsd = number;
export type Period = 'hourly' | 'daily' | 'monthly' | 'yearly';

export type ExchangeRate = Record<Currency, AmountUsd>;

export interface Rate {
  currency: Currency;
  exchangeRate: AmountUsd;
  hourly: number;
  daily: number;
  monthly: number;
  yearly: number;
}

export type RateChange = {
  currency: Currency;
  period: Period;
  value: number;
  valueInUsd: number;
}
