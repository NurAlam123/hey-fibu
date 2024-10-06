import { Collection, MongoClient, ServerApiVersion } from "mongodb";
import config from "../config";

// CONSTANTS
const uri = config.DB_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const database = client.db("fibu");

// TYPES
interface Options {
  collection_name: string;
  query: object;
  options?: object;
}

interface insertOptions {
  collection_name: string;
  doc: object;
  options?: object;
}

interface updateOptions extends Options {
  doc: object;
}

// Write data to database
export const writeDB = async ({
  collection_name,
  doc,
  options = {},
}: insertOptions) => {
  const collection = database.collection(collection_name);
  const cursor = await collection.insertOne(doc, options);
  return cursor;
};

// Find data in database
export const findDB = async ({
  collection_name,
  query,
  options = {},
}: Options) => {
  const collection = database.collection(collection_name);
  const cursor = await collection.findOne(query, options);
  if (!cursor) return;
  if (Object.keys(cursor).length === 0) return;
  return cursor;
};

// Delete data form database
export const deleteDB = async ({ collection_name, query }: Options) => {
  const collection = database.collection(collection_name);
  const cursor = await collection.deleteOne(query);
  return cursor;
};

// Update data
export const updateDB = async ({
  collection_name,
  query,
  doc,
  options = {},
}: updateOptions) => {
  const collection = database.collection(collection_name);
  const cursor = await collection.updateOne(query, doc, options);
  return cursor;
};
