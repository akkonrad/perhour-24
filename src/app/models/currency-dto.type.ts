export interface CurrencyDto {
  meta: {
    last_updated_at: string
  },
  data: {
    [key: string]: {
      code: string,
      value: number
    }
  }
}
