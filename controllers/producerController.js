const { producerHandle } = require('../models/handles');
const Response = require('../utils/response');

const producerController = {
    get: () => async (req, res, next) => {
        try {
            const data = await producerHandle.get();
            Response.success(res, data);
        } catch(err) {
            Response.error(res, err);
        }
    },

    create: () => async (req, res, next) => {
        try {
            const requestData = req.body;
            const data = await producerHandle.create(requestData);
            Response.success(res, data);
        } catch(err) {
            Response.error(res, err);
        }
    },

    update: () => async (req, res, next) => {
        try {
            const requestData = req.body;
            const data = await producerHandle.update(requestData);
            Response.success(res, data);
        } catch(err) {
            Response.error(res, err);
        }
    },

    delete: () => async (req, res, next) => {
        try {
            const _id = req.params.id;
            const data = await producerHandle.delete(_id);
            Response.success(res, data);
        } catch(err) {
            Response.error(res, err);
        }
    },
    findOneById: async (_id) => {
        try {
            return await producerHandle.findOneById(_id);
        } catch(err) {
            Response.error(res, err);
        }
    }
}

module.exports = producerController;