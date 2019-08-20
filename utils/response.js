const { logger } = require('../utils/logger');
class Response {
    static success(res, data) {
        logger.info(data);
        return res.json({
            success: true,
            data
        })
    }

    static error(res, error) {
        logger.error(error);
        return res.json({
            success: false,
            error
        })
    }
}

module.exports = Response