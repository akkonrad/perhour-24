import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";

const MOCK: Currency = {
  "meta": {
    "last_updated_at": "2024-03-21T23:59:59Z"
  },
  "data": {
    "ADA": {
      "code": "ADA",
      "value": 1.5770933063
    },
    "AED": {
      "code": "AED",
      "value": 3.6723806595
    },
    "AFN": {
      "code": "AFN",
      "value": 71.3004983262
    },
    "ALL": {
      "code": "ALL",
      "value": 94.4940935304
    },
    "AMD": {
      "code": "AMD",
      "value": 400.4076537945
    },
    "ANG": {
      "code": "ANG",
      "value": 1.7866402737
    },
    "AOA": {
      "code": "AOA",
      "value": 835.367547976
    },
    "ARB": {
      "code": "ARB",
      "value": 0.59166982
    },
    "ARS": {
      "code": "ARS",
      "value": 854.0813818495
    },
    "AUD": {
      "code": "AUD",
      "value": 1.5217002145
    },
    "AVAX": {
      "code": "AVAX",
      "value": 0.0184993416
    },
    "AWG": {
      "code": "AWG",
      "value": 1.79
    },
    "AZN": {
      "code": "AZN",
      "value": 1.7
    },
    "BAM": {
      "code": "BAM",
      "value": 1.7993102604
    },
    "BBD": {
      "code": "BBD",
      "value": 2
    },
    "BDT": {
      "code": "BDT",
      "value": 109.6033876924
    },
    "BGN": {
      "code": "BGN",
      "value": 1.7901503179
    },
    "BHD": {
      "code": "BHD",
      "value": 0.376
    },
    "BIF": {
      "code": "BIF",
      "value": 2861.3019163696
    },
    "BMD": {
      "code": "BMD",
      "value": 1
    },
    "BNB": {
      "code": "BNB",
      "value": 0.0017933892
    },
    "BND": {
      "code": "BND",
      "value": 1.3434902096
    },
    "BOB": {
      "code": "BOB",
      "value": 6.9070009139
    },
    "BRL": {
      "code": "BRL",
      "value": 4.9720406207
    },
    "BSD": {
      "code": "BSD",
      "value": 1
    },
    "BTC": {
      "code": "BTC",
      "value": 0.0000152399
    },
    "BTN": {
      "code": "BTN",
      "value": 83.3163646524
    },
    "BWP": {
      "code": "BWP",
      "value": 13.7030325547
    },
    "BYN": {
      "code": "BYN",
      "value": 3.2649520223
    },
    "BYR": {
      "code": "BYR",
      "value": 32649.522544949
    },
    "BZD": {
      "code": "BZD",
      "value": 2
    },
    "CAD": {
      "code": "CAD",
      "value": 1.3528501946
    },
    "CDF": {
      "code": "CDF",
      "value": 2764.2728166486
    },
    "CHF": {
      "code": "CHF",
      "value": 0.8977000946
    },
    "CLF": {
      "code": "CLF",
      "value": 0.0258400047
    },
    "CLP": {
      "code": "CLP",
      "value": 972.8497233937
    },
    "CNY": {
      "code": "CNY",
      "value": 7.1986111682
    },
    "COP": {
      "code": "COP",
      "value": 3902.6004386432
    },
    "CRC": {
      "code": "CRC",
      "value": 503.3435941728
    },
    "CUC": {
      "code": "CUC",
      "value": 1
    },
    "CUP": {
      "code": "CUP",
      "value": 24
    },
    "CVE": {
      "code": "CVE",
      "value": 101.5490982003
    },
    "CZK": {
      "code": "CZK",
      "value": 23.2447824196
    },
    "DAI": {
      "code": "DAI",
      "value": 0.9963557777
    },
    "DJF": {
      "code": "DJF",
      "value": 177.721
    },
    "DKK": {
      "code": "DKK",
      "value": 6.8663713321
    },
    "DOP": {
      "code": "DOP",
      "value": 59.0294794574
    },
    "DOT": {
      "code": "DOT",
      "value": 0.1086012796
    },
    "DZD": {
      "code": "DZD",
      "value": 134.9100746448
    },
    "EGP": {
      "code": "EGP",
      "value": 46.6521357669
    },
    "ERN": {
      "code": "ERN",
      "value": 15
    },
    "ETB": {
      "code": "ETB",
      "value": 57.1594375446
    },
    "ETH": {
      "code": "ETH",
      "value": 0.0002859958
    },
    "EUR": {
      "code": "EUR",
      "value": 0.9205901084
    },
    "FJD": {
      "code": "FJD",
      "value": 2.2718004512
    },
    "FKP": {
      "code": "FKP",
      "value": 0.7898643605
    },
    "GBP": {
      "code": "GBP",
      "value": 0.7899501271
    },
    "GEL": {
      "code": "GEL",
      "value": 2.7382503392
    },
    "GGP": {
      "code": "GGP",
      "value": 0.7898645398
    },
    "GHS": {
      "code": "GHS",
      "value": 12.9980015995
    },
    "GIP": {
      "code": "GIP",
      "value": 0.7898643055
    },
    "GMD": {
      "code": "GMD",
      "value": 58.5145160199
    },
    "GNF": {
      "code": "GNF",
      "value": 8551.3202649725
    },
    "GTQ": {
      "code": "GTQ",
      "value": 7.7923213512
    },
    "GYD": {
      "code": "GYD",
      "value": 209.2913791826
    },
    "HKD": {
      "code": "HKD",
      "value": 7.8189310984
    },
    "HNL": {
      "code": "HNL",
      "value": 24.6829647143
    },
    "HRK": {
      "code": "HRK",
      "value": 6.6872811623
    },
    "HTG": {
      "code": "HTG",
      "value": 134.2962995317
    },
    "HUF": {
      "code": "HUF",
      "value": 362.3796724254
    },
    "IDR": {
      "code": "IDR",
      "value": 15640.846196682
    },
    "ILS": {
      "code": "ILS",
      "value": 3.6060003612
    },
    "IMP": {
      "code": "IMP",
      "value": 0.7898646642
    },
    "INR": {
      "code": "INR",
      "value": 83.1686408081
    },
    "IQD": {
      "code": "IQD",
      "value": 1308.165866203
    },
    "IRR": {
      "code": "IRR",
      "value": 42008.523244754
    },
    "ISK": {
      "code": "ISK",
      "value": 136.362006227
    },
    "JEP": {
      "code": "JEP",
      "value": 0.7898641211
    },
    "JMD": {
      "code": "JMD",
      "value": 153.4208887113
    },
    "JOD": {
      "code": "JOD",
      "value": 0.71
    },
    "JPY": {
      "code": "JPY",
      "value": 151.6308699381
    },
    "KES": {
      "code": "KES",
      "value": 132.7918429386
    },
    "KGS": {
      "code": "KGS",
      "value": 89.7496828896
    },
    "KHR": {
      "code": "KHR",
      "value": 4040.9988923941
    },
    "KMF": {
      "code": "KMF",
      "value": 451.8773961292
    },
    "KPW": {
      "code": "KPW",
      "value": 899.9905106096
    },
    "KRW": {
      "code": "KRW",
      "value": 1331.1769928497
    },
    "KWD": {
      "code": "KWD",
      "value": 0.3084300309
    },
    "KYD": {
      "code": "KYD",
      "value": 0.83333
    },
    "KZT": {
      "code": "KZT",
      "value": 449.5264945657
    },
    "LAK": {
      "code": "LAK",
      "value": 20947.305267541
    },
    "LBP": {
      "code": "LBP",
      "value": 89552.189999074
    },
    "LKR": {
      "code": "LKR",
      "value": 306.1576730203
    },
    "LRD": {
      "code": "LRD",
      "value": 193.4877223967
    },
    "LSL": {
      "code": "LSL",
      "value": 18.8119218986
    },
    "LTC": {
      "code": "LTC",
      "value": 0.01164202
    },
    "LTL": {
      "code": "LTL",
      "value": 3.1787113465
    },
    "LVL": {
      "code": "LVL",
      "value": 0.6470106996
    },
    "LYD": {
      "code": "LYD",
      "value": 4.812420696
    },
    "MAD": {
      "code": "MAD",
      "value": 10.0459717062
    },
    "MATIC": {
      "code": "MATIC",
      "value": 1.0016354041
    },
    "MDL": {
      "code": "MDL",
      "value": 17.6638931403
    },
    "MGA": {
      "code": "MGA",
      "value": 4442.3623658487
    },
    "MKD": {
      "code": "MKD",
      "value": 56.631758483
    },
    "MMK": {
      "code": "MMK",
      "value": 2095.291490406
    },
    "MNT": {
      "code": "MNT",
      "value": 3399.3354087919
    },
    "MOP": {
      "code": "MOP",
      "value": 8.13012106
    },
    "MRO": {
      "code": "MRO",
      "value": 356.999828
    },
    "MRU": {
      "code": "MRU",
      "value": 39.4631615254
    },
    "MUR": {
      "code": "MUR",
      "value": 46.0227047135
    },
    "MVR": {
      "code": "MVR",
      "value": 15.4500722472
    },
    "MWK": {
      "code": "MWK",
      "value": 1733.559480837
    },
    "MXN": {
      "code": "MXN",
      "value": 16.7342919391
    },
    "MYR": {
      "code": "MYR",
      "value": 4.713720852
    },
    "MZN": {
      "code": "MZN",
      "value": 63.7443466167
    },
    "NAD": {
      "code": "NAD",
      "value": 18.7928834809
    },
    "NGN": {
      "code": "NGN",
      "value": 1410.4954582803
    },
    "NIO": {
      "code": "NIO",
      "value": 36.5276296413
    },
    "NOK": {
      "code": "NOK",
      "value": 10.6638716882
    },
    "NPR": {
      "code": "NPR",
      "value": 134.1146155075
    },
    "NZD": {
      "code": "NZD",
      "value": 1.6542302943
    },
    "OMR": {
      "code": "OMR",
      "value": 0.3841300625
    },
    "OP": {
      "code": "OP",
      "value": 0.2906091064
    },
    "PAB": {
      "code": "PAB",
      "value": 0.9992701248
    },
    "PEN": {
      "code": "PEN",
      "value": 3.6959504581
    },
    "PGK": {
      "code": "PGK",
      "value": 3.7920506354
    },
    "PHP": {
      "code": "PHP",
      "value": 56.0637890727
    },
    "PKR": {
      "code": "PKR",
      "value": 278.3444822353
    },
    "PLN": {
      "code": "PLN",
      "value": 3.9609507543
    },
    "PYG": {
      "code": "PYG",
      "value": 7351.2426289576
    },
    "QAR": {
      "code": "QAR",
      "value": 3.6396007075
    },
    "RON": {
      "code": "RON",
      "value": 4.5780009037
    },
    "RSD": {
      "code": "RSD",
      "value": 107.6506381728
    },
    "RUB": {
      "code": "RUB",
      "value": 91.8114298691
    },
    "RWF": {
      "code": "RWF",
      "value": 1284.4596556883
    },
    "SAR": {
      "code": "SAR",
      "value": 3.7451003934
    },
    "SBD": {
      "code": "SBD",
      "value": 8.2819161895
    },
    "SCR": {
      "code": "SCR",
      "value": 14.5297121198
    },
    "SDG": {
      "code": "SDG",
      "value": 601.5
    },
    "SEK": {
      "code": "SEK",
      "value": 10.4622816239
    },
    "SGD": {
      "code": "SGD",
      "value": 1.3434202203
    },
    "SHP": {
      "code": "SHP",
      "value": 0.7899500961
    },
    "SLL": {
      "code": "SLL",
      "value": 22608.639933196
    },
    "SOL": {
      "code": "SOL",
      "value": 0.0055600769
    },
    "SOS": {
      "code": "SOS",
      "value": 571.5652007452
    },
    "SRD": {
      "code": "SRD",
      "value": 35.0879659943
    },
    "STD": {
      "code": "STD",
      "value": 22475.736935136
    },
    "STN": {
      "code": "STN",
      "value": 22.4757258785
    },
    "SVC": {
      "code": "SVC",
      "value": 8.75
    },
    "SYP": {
      "code": "SYP",
      "value": 13001.874392035
    },
    "SZL": {
      "code": "SZL",
      "value": 18.8274020164
    },
    "THB": {
      "code": "THB",
      "value": 36.3079555304
    },
    "TJS": {
      "code": "TJS",
      "value": 11.0720415054
    },
    "TMT": {
      "code": "TMT",
      "value": 3.5
    },
    "TND": {
      "code": "TND",
      "value": 3.1003203401
    },
    "TOP": {
      "code": "TOP",
      "value": 2.3490804062
    },
    "TRY": {
      "code": "TRY",
      "value": 32.1314350715
    },
    "TTD": {
      "code": "TTD",
      "value": 6.7977710439
    },
    "TWD": {
      "code": "TWD",
      "value": 31.9209145965
    },
    "TZS": {
      "code": "TZS",
      "value": 2547.567072426
    },
    "UAH": {
      "code": "UAH",
      "value": 39.2718345929
    },
    "UGX": {
      "code": "UGX",
      "value": 3891.8726887275
    },
    "USD": {
      "code": "USD",
      "value": 1
    },
    "USDC": {
      "code": "USDC",
      "value": 0.9948323563
    },
    "USDT": {
      "code": "USDT",
      "value": 0.9960014427
    },
    "UYU": {
      "code": "UYU",
      "value": 37.7423439169
    },
    "UZS": {
      "code": "UZS",
      "value": 12631.943169111
    },
    "VEF": {
      "code": "VEF",
      "value": 3624735.6134414
    },
    "VES": {
      "code": "VES",
      "value": 36.2473474315
    },
    "VND": {
      "code": "VND",
      "value": 24780.279454651
    },
    "VUV": {
      "code": "VUV",
      "value": 120.3141799838
    },
    "WST": {
      "code": "WST",
      "value": 2.7523324756
    },
    "XAF": {
      "code": "XAF",
      "value": 603.9118905777
    },
    "XAG": {
      "code": "XAG",
      "value": 0.0404016531
    },
    "XAU": {
      "code": "XAU",
      "value": 0.0004584445
    },
    "XCD": {
      "code": "XCD",
      "value": 2.7
    },
    "XDR": {
      "code": "XDR",
      "value": 0.755970098
    },
    "XOF": {
      "code": "XOF",
      "value": 603.911879977
    },
    "XPD": {
      "code": "XPD",
      "value": 0.0009923955
    },
    "XPF": {
      "code": "XPF",
      "value": 109.7906018904
    },
    "XPT": {
      "code": "XPT",
      "value": 0.0011016809
    },
    "XRP": {
      "code": "XRP",
      "value": 1.5547459708
    },
    "YER": {
      "code": "YER",
      "value": 249.8448103726
    },
    "ZAR": {
      "code": "ZAR",
      "value": 18.8257526702
    },
    "ZMK": {
      "code": "ZMK",
      "value": 9001.2
    },
    "ZMW": {
      "code": "ZMW",
      "value": 26.2101645375
    },
    "ZWL": {
      "code": "ZWL",
      "value": 361.9
    }
  }
};

export interface Currency {
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

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  getCurrencies(): Observable<Currency> {
    return of(MOCK);
  }
}
