// TODO: use distinct types instead string
export type Currency = string;

export interface Rate {
  currency: Currency;
  hourly: number;
  daily: number;
  monthly: number;
  yearly: number;
  usd?: number;
}
