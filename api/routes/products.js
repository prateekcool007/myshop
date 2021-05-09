var express = require('express');
var router = express.Router();
var dbService = require('../services/productService');

router.get('/products', (req, res) => {
    dbService.getProducts(result => {
        res.send(result);
    }, () => {
        res.status(400).send("Failed to fetch all products").end();
    });
});

router.get('/products/:productId', (req, res) => {
    dbService.getProductsById(req.params.productId, result => {
        res.send(result);
    }, () => {
        res.status(400).send("Failed to fetch product").end();
    });
});

router.get('/categories/:categoryId/products', (req, res) => {
    dbService.getProductsForCategoryId(req.params.categoryId, result => {
        res.send(result);
    }, () => {
        res.status(400).send("Failed to fetch product").end();
    });
});

router.post('/categories/:categoryId/products', (req, res) => {
    dbService.createProduct(req.body, () => {
        res.send("New product created");
    }, () => {
        res.status(400).send("Failed to create product").end();
    });
});

module.exports = router;