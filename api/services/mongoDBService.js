const { MongoClient, ObjectId } = require('mongodb');
const connectionString = "mongodb://localhost:27017/myshopdb";
var Category = require('../pojso/category.js');

const dbClient = MongoClient(connectionString, { useUnifiedTopology: true });

var mongoDBService = {

    handleError: function (err) {
        console.error(err);
    },

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
            //How to disconnect
        }
    },

    initialize: async function (success, error) {
        try {
            var createTable = (db, tableName, callback) => {

                db.createCollection(tableName).then(
                    (value) => {
                        console.log(`Created Table: ${db.databaseName}.${value.collectionName}`);
                        if (!!callback)
                            callback();
                    },
                    (error) => {
                        module.exports.handleError(error);
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
                module.exports.handleError(err);
            });
        }
        finally {
            //How to disconnect
        }
    },

    // Category CRUD
    addCategory: async function (categoryObj, success, error) {
        try {
            dbClient.connect().then(client => {
                var db = client.db("myshopdb");
                db.collection('categories').insertOne({
                    Name: categoryObj.name,
                    Description: categoryObj.description,
                    IconUrl: categoryObj.iconUrl,
                    CreatedDate: categoryObj.createdDate
                }, (err, res) => {
                    if (err) {
                        module.exports.handleError(err);
                        error();
                    }
                    else if (res.insertedCount != 1) {
                        console.error(`${res.insertedCount} - records inserted - expected 1`);
                        error();
                    }
                    else {
                        console.log('Insert successful');
                        success();
                    }
                });
            }).catch(err => {
                module.exports.handleError(err);
                error();
            });
        }
        catch (err) {
            console.error(err);
            error();
        }
    },

    getCategories: async function (success, error) {
        try {
            dbClient.connect().then(client => {
                var db = client.db("myshopdb");
                db.collection('categories').find({}).project({ Name: 1, Description: 1, IconUrl: 1 }).toArray((err, result) => {
                    if (err)
                        throw err;
                    success(result);
                });
            }).catch(err => {
                module.exports.handleError(err);
                error();
            });
        }
        catch (err) {
            console.error(err);
            error();
        }
    },

    getCategoryById: async function (categoryId, success, error) {
        try {
            dbClient.connect().then(client => {
                var db = client.db("myshopdb");
                db.collection('categories').find({ _id: ObjectId(categoryId) }).project({ Name: 1, Description: 1, IconUrl: 1 }).toArray((err, result) => {
                    if (err)
                        throw err;
                    success(result);
                });
            }).catch(err => {
                module.exports.handleError(err);
                error();
            });
        }
        catch (err) {
            console.error(err);
            error();
        }
    },

    // Product CRUD
    addProduct: async function (productObj, success, error) {
        try {
            dbClient.connect().then(client => {
                var db = client.db("myshopdb");
                db.collection('products').insertOne({
                    Name: productObj.name,
                    CategoryId: ObjectId(productObj.categoryId),
                    Description: productObj.description,
                    ImageUrl: productObj.imageUrl,
                    CreatedDate: productObj.createdDate
                }, (err, res) => {
                    if (err) {
                        module.exports.handleError(err);
                        error();
                    }
                    else if (res.insertedCount != 1) {
                        console.error(`${res.insertedCount} - records inserted - expected 1`);
                        error();
                    }
                    else {
                        console.log('Insert successful');
                        success();
                    }
                });
            }).catch(err => {
                module.exports.handleError(err);
            });
        }
        catch (err) {
            console.error(err);
        }
    },

    getProducts: async function (success, error) {
        try {
            dbClient.connect().then(client => {
                var db = client.db("myshopdb");
                db.collection('products').find({}).project({ Name: 1, CategoryId: 1, Description: 1, ImageUrl: 1 }).toArray((err, result) => {
                    if (err)
                        throw err;
                    success(result);
                });
            }).catch(err => {
                module.exports.handleError(err);
                error();
            });
        }
        catch (err) {
            console.error(err);
            error();
        }
    },

    getProductsById: async function (productId, success, error) {
        try {
            dbClient.connect().then(client => {
                var db = client.db("myshopdb");
                db.collection('products').find({ _id: ObjectId(productId) }).project({ Name: 1, CategoryId: 1, Description: 1, ImageUrl: 1 }).toArray((err, result) => {
                    if (err)
                        throw err;
                    success(result);
                });
            }).catch(err => {
                module.exports.handleError(err);
                error();
            });
        }
        catch (err) {
            console.error(err);
            error();
        }
    },

    getProductsForCategoryId: async function (categoryId, success, error) {
        try {
            dbClient.connect().then(client => {
                var db = client.db("myshopdb");
                db.collection('products').find({ CategoryId: ObjectId(categoryId) }).project({ Name: 1, CategoryId: 1, Description: 1, ImageUrl: 1 }).toArray((err, result) => {
                    if (err)
                        throw err;
                    success(result);
                });
            }).catch(err => {
                module.exports.handleError(err);
                error();
            });
        }
        catch (err) {
            console.error(err);
            error();
        }
    },
}

module.exports = mongoDBService;