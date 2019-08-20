const { loggerRequest, loggerError } = require('../utils/logger');

const ErrorLogger = async (req, res, next) => {
    try {
        console.log("1111111111111111111111111111")
        const data = await next();
        console.log("3333333333333333333333333333", data)
    } catch (err) {
        console.log("zzzzzzzzzzzz11111111111111111111111111111")
        loggerError.error(JSON.stringify(err))
    }
}


const RequestLogger = (req, res, next) => {
    console.log("Logger Request")
    loggerRequest.info(req.method + ' - ' + req.originalUrl);
    next();
}

module.exports = {
    ErrorLogger,
    RequestLogger
}
