import {CurrencySerice} from "../services/currency.service";

export default async function handler(req, res) {
  try {
    const apiUrl = `https://api.currencyapi.com/v3/latest?apikey=${process.env.CURRENCY_API_KEY}`
    const response = await fetch(apiUrl);
    const currencyToInsert = await response.json();

    const previousCurrency = await CurrencySerice.getLatestCurrency();

    const prevDay = previousCurrency?.time.split('T')[0];
    const today = (new Date()).toISOString().split('T')[0];


    console.log({prevDay, today});

    if (today !== prevDay) {
      await CurrencySerice.insertCurrency(currencyToInsert);
      console.log('Inserted new currency');
      res.status(200).json({message: 'Inserted new currency'});
      return;
    }

    res.status(200).json({message: 'No new currency to insert'});
    console.log('No new currency to insert');
  }
  catch (error) {
    console.error(error);
    res.status(500).json({error: error.message});
  }

}
