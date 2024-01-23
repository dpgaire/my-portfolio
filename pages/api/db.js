// db.js
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let client;
let connection;

if (!process.env.MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

if (!process.env.MONGODB_DB) {
  throw new Error('Please define the MONGODB_DB environment variable inside .env.local');
}

export const connectDatabase = async () => {
  if (connection) return connection;

  if (!client) {
    client = new MongoClient(uri, options);

    await client.connect();
  }

  connection = { client, db: client.db(process.env.MONGODB_DB) };
  return connection;
};
