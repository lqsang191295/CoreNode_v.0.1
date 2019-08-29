const { ErrorLogger, RequestLogger, handleLogger } = require('./loggerMiddleware');
const AuthMiddleware = require('./authMiddleware');

module.exports = {
    ErrorLogger,
    RequestLogger,
    AuthMiddleware,
    handleLogger
}