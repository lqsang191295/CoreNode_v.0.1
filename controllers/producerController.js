const {productHandle} = require('../models/handles');
const Response = require('../utils/response');

const productController = {
    get: () => async (req, res, next) => {
        try {
            const data = await productHandle.get();
            Response.success(res, data);
        } catch(err) {
            Response.error(res, err);
        }
    },

    create: () => async (req, res, next) => {
        try {
            const requestData = req.body;
            const data = await productHandle.create(requestData);
            Response.success(res, data);
        } catch(err) {
            Response.error(res, err);
        }
    },

    update: () => async (req, res, next) => {
        try {
            const requestData = req.body;
            const data = await productHandle.update(requestData);
            Response.success(res, data);
        } catch(err) {
            Response.error(res, err);
        }
    },

    delete: () => async (req, res, next) => {
        try {
            const {_id} = req.body || {};
            const data = await productHandle.delete(_id);
            Response.success(res, data);
        } catch(err) {
            Response.error(res, err);
        }
    },
    findOneById: async (_id) => {
        try {
            return await productHandle.findOneById(_id);
        } catch(err) {
            Response.error(res, err);
        }
    }
}

module.exports = productController;