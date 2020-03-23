/* eslint-disable no-console */
const { MongoClient } = require('mongodb');

const { MONGO_URL, DB_NAME } = process.env;

let cachedDb = null;

function connectToDatabase(uri) {
  console.log('=> connect to database');

  if (cachedDb) {
    console.log('=> using cached database instance');
    return Promise.resolve(cachedDb);
  }

  return MongoClient.connect(uri).then(client => {
    const db = client.db(DB_NAME);
    cachedDb = db;
    return cachedDb;
  });
}

function insertEntry(db) {
  // console.log('=> query database', db);

  const daily = db.collection('daily');

  return daily
    .insertOne({
      name: 'teste',
      oloco: 'meu',
    })
    .then(() => {
      return { statusCode: 200, body: 'success' };
    })
    .catch(err => {
      console.log('=> an error occurred: ', err);
      return { statusCode: 500, body: 'error' };
    });
}

module.exports.handler = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  // console.log('event: ', event);

  connectToDatabase(MONGO_URL)
    .then(db => insertEntry(db))
    .then(result => {
      console.log('=> returning result: ', result);
      callback(null, result);
    })
    .catch(err => {
      console.log('=> an error occurred: ', err);
      callback(err);
    });
};
