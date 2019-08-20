const Response = require('../utils/response');
const jwt = require('jsonwebtoken');
const { SECRET } = require('../config');
const {userController} = require('../controllers')

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization') ? req.header('Authorization').replace('Bearer ', '') : '';
        if(!token) {
            Response.error(res, 'No token');
            return 
        }
        const decode = jwt.verify(token, SECRET);
        const {_id} = decode;
        const user = await userController.findOneById(_id);
        if (_id && user) {
            req.dataUser = user;
            next();
        } else {
            res.setHeader("Content-Type", "text/html")
            return Response.error(res, 'No user');
        }
    } catch (err) {
        next(err);
    }
}

module.exports = auth;