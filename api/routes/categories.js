var express = require('express');
var router = express.Router();
var productRoutes = require('./products');
var dbService = require('../services/categoryService');

router.get('/categories', (req, res) => {
    dbService.getCategories(result => {
        res.send(result);
    }, () => {
        res.status(400).send("Failed to fetch all categories").end();
    });
});

router.get('/categories/:categoryId', (req, res) => {
    dbService.getCategoryById(req.params.categoryId , result => {
        res.send(result);
    }, () => {
        res.status(400).send("Failed to fetch category").end();
    });
});

router.post('/categories', (req, res) => {
    dbService.createCategory(req.body, () => {
        res.send("New category created");
    }, () => {
        res.status(400).send("Failed to create category").end();
    });
});

module.exports = router;