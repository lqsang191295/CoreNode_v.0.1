const { userTokenHandle } = require('../models/handles');
const Response = require('../utils/response');

const userTokenController = {

    create: () => async (req, res, next) => {
        try {
            const requestData = req.body;
            const data = await userTokenHandle.create(requestData);
            Response.success(res, data);
        } catch(err) {
            Response.error(res, err);
        }
    },

    update: () => async (req, res, next) => {
        try {
            const request = req.body;
           
            Response.success(res, null);
        } catch(err) {
            Response.error(res, err);
        }
    },

    delete: () => async (req, res, next) => {
        try {
            const {_id} = req.body || {};
            const data = await userTokenHandle.delete(_id);
            Response.success(res, data);
        } catch(err) {
            Response.error(res, err);
        }
    },
    findOneById: async (_id) => {
        try {
            return await userTokenHandle.findOneById(_id);
        } catch(err) {
            Response.error(res, err);
        }
    }
}

module.exports = userTokenController;