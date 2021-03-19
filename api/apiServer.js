const express = require('express');
const expressApp = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const port = 9090;
var corsOptions = {
    origin: 'http://localhost:4444',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

// Import logger & error handler
const logger = require('./routes/logger')(expressApp);
const errors = require('./routes/errors')(expressApp);
// Import all route modules
const dbAdmin = require('./routes/dbAdmin');
var categoryRoutes = require('./routes/categories');
var productRoutes = require('./routes/products');

expressApp.use(cors(corsOptions));
expressApp.use(bodyParser.json());
expressApp.use(bodyParser.urlencoded({ extended: true }));


// All Routes register here
expressApp.use('/db', dbAdmin);
expressApp.use('/', categoryRoutes);
expressApp.use('/', productRoutes);

expressApp.listen(port, () => {
    console.log(`ApiServer running at http://localhost:${port}`);
});