import { CurrencySerice } from '../services/currency.service';
export default function handler(req, res) {
  async function run() {
    try {
      const data =  await CurrencySerice.getLatestCurrency();
      res.status(200).json(data);
    }
    catch (error) {
      console.error(error);
      res.status(500).json({error: error.message});
    }
  }
  run().catch(error => res.status(500).json({error: error.message}));

}
