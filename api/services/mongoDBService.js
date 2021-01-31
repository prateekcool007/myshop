const { MongoClient } = require('mongodb');
const connectionString = "mongodb://localhost:27017/myshopdb";

const dbClient = MongoClient(connectionString);

var mongoDBService = {

    test: async function () {
        try {
            await dbClient.connect((err, client) => {
                if (!!client && !!client.topology && client.topology.isConnected())
                    return true;
                else
                    return false;
            });
        }
        finally {
            await dbClient.close();
        }
    },
}

module.exports = mongoDBService;