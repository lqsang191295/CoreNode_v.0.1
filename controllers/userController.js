const {userHandle} = require('../models/handles');
const Response = require('../utils/response');

const userController = {
    get: () => async (req, res, next) => {
        try {
            console.log(22222222222)
            const data = await userHandle.get();
            Response.success(res, data);
        } catch(err) {
            Response.error(res, err);
        }
    },

    create: () => async (req, res, next) => {
        try {
            const requestData = req.body;
            const data = await userHandle.create(requestData);
            Response.success(res, data);
        } catch(err) {
            Response.error(res, err);
        }
    },

    update: () => async (req, res, next) => {
        try {
            const request = req.body;
            const dataUser = {...req.dataUser};
            //const dataPost = this.mapDataUpdate(dataUser);
            console.log(333333, request, dataUser);
            // const dataUpdate = {
            //     ...dataUser,
            //     ...request
            // }
            // console.log(dataUpdate);
            // dataUpdate = this.mapDataUpdate(dataUpdate);
            // console.log(1111111, dataUpdate);
            // const data = await userHandle.update(dataUpdate);
            Response.success(res, null);
        } catch(err) {
            Response.error(res, err);
        }
    },

    delete: () => async (req, res, next) => {
        try {
            const {_id} = req.body || {};
            const data = await userHandle.delete(_id);
            Response.success(res, data);
        } catch(err) {
            Response.error(res, err);
        }
    },
    findOneById: async (_id) => {
        try {
            return await userHandle.findOneById(_id);
        } catch(err) {
            Response.error(res, err);
        }
    },
    mapDataUpdate: (data) => {
        const fields = ['_id', 'name', 'email'];
        const result = {};
        fields.forEach((val) => {
            result[val] = data[val];
        })
        return result;
    }
}

module.exports = userController;