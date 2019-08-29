const jwt = require('jsonwebtoken');
const SECRET = require('../config').SECRET;
const { userHandle } = require('../models/handles');
const { userTokenHandle } = require('../models/handles');
const Response = require('../utils/response');
const bcrypt = require('bcrypt');

const generateAuthToken = async (user) => {
    const token = jwt.sign(user, SECRET);
    const {username} = user;
    await userTokenHandle.update({
        username,
        token
    })
    return token;
}

const comparePassword = async (password, _password) => {
    try {
        const result = await bcrypt.compare(password, _password);
        return result;
    } catch (err) {
        return err;
    }
}

const login = () => async (req, res, next) => {
    try {
        const {username, password} = req.body;
        const user = await userHandle.findOneByUsername(username);
        if(user) {
            const isMatchPassword = await comparePassword(password, user.password);
            if(isMatchPassword) {
                const {username, _id, name, email} = user;
                const token = await generateAuthToken({_id, username});
                Response.success(res, {token, username, _id, name, email})
            } else {
                Response.error(res, {error: {
                    code: 'NO_MATCH_PASSWORD'
                }})
            }
        } else {
            Response.error(res, {error: {
                code: 'NO_USER'
            }})
        }
    } catch (err) {
        Response.error(res, {error: {
            code: 'ERROR_COMMON',
            error: err
        }})
        throw err
    }
}

const register = () => async (req, res, next) => {
    try {
        const user = await userHandle.create(req.body);
        Response.success(res, user);
    } catch(err) {
        Response.error(res, err);
    }
}

module.exports = {
    login,
    register
}