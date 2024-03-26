import {MongoClient, ServerApiVersion} from "mongodb";

export const CurrencySerice = {

  client: () => {
    const {MongoClient, ServerApiVersion} = require('mongodb');
    const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_DB}.eidtkab.mongodb.net/?retryWrites=true&w=majority`;

    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });

    return client;
  },

  getLatestCurrency: async function (){
    const client = this.client();
    await client.connect();
    const data = await client.db(process.env.MONGO_DATABASE).collection(process.env.MONGO_COLLECTION).find({}).sort({time: 1}).limit(1).toArray();
    await client.close();
    return data[0];
  },

  insertCurrency: async function (currency){
    const client = this.client();
    await client.connect();
    await client.db(process.env.MONGO_DATABASE).collection(process.env.MONGO_COLLECTION).insertOne({...currency, time: new Date()});
    await client.close();
  }
}
