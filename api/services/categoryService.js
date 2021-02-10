var dbService = require('./mongoDBService.js');
var Category = require('../pojso/category.js');

var service = {

    createCategory: function (categoryData, success, error) {
        if (categoryData === undefined)
            return { code: 400, message: 'No data' };
        let catObj = new Category(categoryData.name, categoryData.iconUrl);
        // Insert into Table
        dbService.addCategory(catObj, success, error);
    },

    getCategories: function (success, error) {
        // Select all from Table
        dbService.getCategories(success, error);
    },

    getCategoryById: function (categoryId, success, error) {
        // Select all from Table where categoryId
        dbService.getCategoryById(categoryId, success, error);
    },
}

module.exports = service;