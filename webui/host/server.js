const express = require('express');
const expressApp = express();
const path = require('path');

const port = 8989;

expressApp.use(express.json());
expressApp.use('/pub', express.static(path.join(__dirname, '..\public')));


expressApp.listen(port, () => {
    console.log(`WebHost running at http://localhost:${port}`);
});