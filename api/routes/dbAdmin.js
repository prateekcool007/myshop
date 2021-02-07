var express = require('express');
var router = express.Router();
var dbService = require('../services/mongoDBService');

router.get('/test', (req, res) => {
    dbService.test(() => {
        res.send("Connected to Database");
    }, () => {
        res.send("Unable to connect to database");
    });
});

router.get('/init', (req, res) => {
    dbService.initialize(() => {
        res.send("Database Initialized");
    }, () => {
        res.send("Failed to initialize to database");
    });
});
module.exports = router;