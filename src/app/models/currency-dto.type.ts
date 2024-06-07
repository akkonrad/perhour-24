import {AmountUsd, Currency} from "./rate.type";

export interface CurrencyDto {
  meta: {
    last_updated_at: string
  },
  data: {
    [key: string]: {
      code: Currency,
      value: AmountUsd
    }
  }
}
