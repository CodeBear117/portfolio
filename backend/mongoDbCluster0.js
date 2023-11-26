// this file handles the MongoDB connection.
const { MongoClient } = require('mongodb');
require('dotenv').config();

let dbConnection;

module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect(process.env.MONGO_URI, { useUnifiedTopology: true })
            .then((client) => {
                dbConnection = client.db();
                return cb();
            })
            .catch((err) => {
                console.log('Database Connection Error', err.message);
                return cb(err);
            });
    },
    getDb: () => dbConnection,
};