var express = require('express');
var router = express.Router();
var productRoutes = require('./products');
var dbService = require('../services/mongoDBService');

router.get('/categories', (req, res) => {
    res.send("All Categories Api");
});


router.get('/categories/:categoryId', (req, res) => {
    res.send(`Category: ${req.params.categoryId} details`);
});



module.exports = router;