errors = function (expressApp) {
    expressApp.use((err, req, res, next) => {
        console.error(`${getDateString()} - ${err.stack}`);
        res.status(500).send('Unexpected Error').end();
    });
};

getDateString = function() {
    var dt = new Date();
    var retVal = `${('0' + dt.getDate()).slice(-2)}/${('0' + dt.getMonth() + 1).slice(-2)}/${dt.getFullYear()} ${('0' + dt.getHours()).slice(-2)}:${('0' + dt.getMinutes()).slice(-2)}:${('0' + dt.getSeconds()).slice(-2)}.${('00' + dt.getMilliseconds()).slice(-3)}`;
    return retVal;
};

module.exports = errors;