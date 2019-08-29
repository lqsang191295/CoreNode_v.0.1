const { loggerRequest, logger } = require('../utils/logger');

const ErrorLogger = async (req, res, next) => {
    try {
        const data = await next();
    } catch (err) {
        logger.error(JSON.stringify(err))
    }
}


const RequestLogger = (req, res, next) => {
    loggerRequest.info(req.method + ' - ' + req.originalUrl);
    next();
}

const handleLogger = fn => async (req, res, next) => {
    try {
        await fn(req, res, next);
    } catch (err) {
        logger.error(JSON.stringify(err))
    }
}

module.exports = {
    ErrorLogger,
    RequestLogger,
    handleLogger
}
