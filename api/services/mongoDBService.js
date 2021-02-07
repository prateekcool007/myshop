const { MongoClient } = require('mongodb');
const connectionString = "mongodb://localhost:27017/myshopdb";

const dbClient = MongoClient(connectionString, { useUnifiedTopology: true });

var mongoDBService = {

    test: async function (success, error) {
        try {
            await dbClient.connect((err, client) => {
                if (err) throw err;

                if (!!client && !!client.topology && client.topology.isConnected())
                    success();
                else
                    error();
            });
        }
        catch (err) {
            console.error(err);
        }
        finally {
            await dbClient.close();
        }
    },

    initialize: async function (success, error) {

        var handleError = (err) => {
            console.error(err);
            error();
        };

        var createTable = (db, tableName, callback) => {

            db.createCollection(tableName).then(
                (value) => {
                    console.log(`Created Table: ${db.databaseName}.${value.collectionName}`);
                    if (!!callback)
                        callback();
                },
                (error) => {
                    handleError(error);
                });
        };

        dbClient.connect().then(client => {

            var db = client.db("myshopdb");
            console.log(`Created Database: ${db.databaseName}`);

            // Categories
            createTable(db, 'categories', () => {
                // Products
                createTable(db, 'products', () => {
                    // Users
                    createTable(db, 'users', () => {
                        if (!!success)
                            success();
                    });
                });
            });

        }).catch(err => {
            handleError(err);
        });
    },
}

module.exports = mongoDBService;