const {productHandle, categoryHandle, producerHandle} = require('../models/handles');
const Response = require('../utils/response');

const mapdata = async function(data){
    try {
        let _data = JSON.parse(JSON.stringify(data));

        _data = await asyncForeach(_data);

        return _data;
    } catch (ex) {
        console.log(ex)
    }
}
const mapDataItem = async (item) => {
    const category = await categoryHandle.findOneById(item.category_id);
    const category_name = category ? category.name : null;
    const producer = await producerHandle.findOneById(item.producer_id);
    const producer_name = producer ? producer.name : null;
    item.category_name = category_name;
    item.producer_name = producer_name;
    return item;
}
const asyncForeach = async function(array) {
    for (let index = 0; index < array.length; index++) {
        await mapDataItem(array[index]);
    }
    return array;
}

const productController = {
    get: () => async (req, res, next) => {
        try {
            let data = await productHandle.get();
            let _data = await mapdata(data);
            Response.success(res, _data);
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
            const _id = req.params.id;
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