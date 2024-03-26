import {CurrencySerice} from "../services/currency.service";

export default async function handler(req, res) {
  try {
    const apiUrl = `https://api.currencyapi.com/v3/latest?apikey=${process.env.CURRENCY_API_KEY}`
    const currencyApiResponse = await fetch(apiUrl);
    const currencyToInsert = await currencyApiResponse.json();

    const lastInsertedCurrency = await CurrencySerice.getLatestCurrency();

    const lastInsertedDay = lastInsertedCurrency?.time.split('T')[0];
    const today = (new Date()).toISOString().split('T')[0];

    if (today !== lastInsertedDay) {
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
