const { categoryHandle } = require('../models/handles');
const Response = require('../utils/response');

const categoryController = {
    get: () => async (req, res, next) => {
        try {
            const data = await categoryHandle.get();
            Response.success(res, data);
        } catch(err) {
            Response.error(res, err);
        }
    },
    
    create: () => async (req, res, next) => {
        try {
            const requestData = req.body;
            const data = await categoryHandle.create(requestData);
            Response.success(res, data);
        } catch(err) {
            Response.error(res, err);
        }
    },

    update: () => async (req, res, next) => {
        try {
            const request = req.body;
            const data = await categoryHandle.update(request);
            Response.success(res, data);
        } catch(err) {
            Response.error(res, err);
        }
    },

    delete: () => async (req, res, next) => {
        try {
            const _id = req.params.id;
            const data = await categoryHandle.delete(_id);
            Response.success(res, data);
        } catch(err) {
            Response.error(res, err);
        }
    },
    findOneById: async (_id) => {
        try {
            return await categoryController.findOneById(_id);
        } catch(err) {
            Response.error(res, err);
        }
    }
}

module.exports = categoryController;