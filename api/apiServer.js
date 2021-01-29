const express = require('express');
const expressApp = express();
const port = 9090;

expressApp.use(express.json());

expressApp.get('/', (req, res) => {
    res.send('Hello World 123');
});

expressApp.listen(port, () => {
console.log(`ApiServer running at http://localhost:${port}`);
});