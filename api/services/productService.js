var dbService = require('./mongoDBService.js');
var Product = require('../pojso/product.js');

var service = {

    createProduct: function (productData, success, error) {
        if (productData === undefined)
            return { code: 400, message: 'No data' };
        let prodObj = new Product(productData.name, productData.categoryId, productData.description, productData.imageUrl);
        // Insert into Table
        dbService.addProduct(prodObj, success, error);
    },

    getProducts: function (success, error) {
        // Select all from Table
        dbService.getProducts(success, error);
    },

    getProductsById: function (productId, success, error) {
        // Select all from Table where productId
        dbService.getProductsById(productId, success, error);
    },

    getProductsForCategoryId: function (categoryId, success, error) {
        // Select all from Table where categoryId
        dbService.getProductsForCategoryId(categoryId, success, error);
    },
}

module.exports = service;