var express = require('express');
var router = express.Router();
var productRoutes = require('./products');
var dbService = require('../services/mongoDBService');

router.get('/dbtest', (req, res) => {
    if (dbService.test())
        res.send("Connected to Database");
    else
        res.send("unable to connect to database");
});

router.get('/categories', (req, res) => {
    dbService.test();
    res.send("All Categories Api");
});


router.get('/categories/:categoryId', (req, res) => {
    res.send(`Category: ${req.params.categoryId} details`);
});



module.exports = router;