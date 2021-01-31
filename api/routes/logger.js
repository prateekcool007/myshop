logger = function (expressApp) {
    expressApp.use((req, res, next) => {
        console.log(`${getDateString()} - ${req.method} Request: ${req.originalUrl}`);
        next();
    });
};

getDateString = function() {
    var dt = new Date();
    var retVal = `${('0' + dt.getDate()).slice(-2)}/${('0' + dt.getMonth() + 1).slice(-2)}/${dt.getFullYear()} ${('0' + dt.getHours()).slice(-2)}:${('0' + dt.getMinutes()).slice(-2)}:${('0' + dt.getSeconds()).slice(-2)}.${('00' + dt.getMilliseconds()).slice(-3)}`;
    return retVal;
};

module.exports = logger;