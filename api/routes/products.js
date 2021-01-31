var express = require('express');
var router = express.Router();

router.get('/products', (req, res) => {
    res.send("All Products Api");
});


router.get('/products/:productId', (req, res) => {
    res.send(`Product: ${req.params.productId} details`);
});

module.exports = router;