const express = require('express');
const expressApp = express();
const port = 9090;

// Import logger & error handler
const logger = require('./routes/logger')(expressApp);
const errors = require('./routes/errors')(expressApp);
// Import all route modules
const dbAdmin = require('./routes/dbAdmin');
var categoryRoutes = require('./routes/categories');
var productRoutes = require('./routes/products');

expressApp.use(express.json());

// All Routes register here
expressApp.use('/db', dbAdmin);
expressApp.use('/', categoryRoutes);
expressApp.use('/', productRoutes);

expressApp.listen(port, () => {
    console.log(`ApiServer running at http://localhost:${port}`);
});