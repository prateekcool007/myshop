var dbService = require('./mongoDBService');

var service = {

    createCategory: function(categoryData) {
        if(categoryData === undefined)
        return { code: 400, message: 'No data'};
    },
}

module.exports = service;