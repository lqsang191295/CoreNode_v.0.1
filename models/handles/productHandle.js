const { Product } = require('../');

const productHandle = {
    get: () => {
        return Product.find();
    },
    create: (data) => {
        return Product.create(data);
    },
    findOneById: (_id) => {
        return Product.findOne({_id});
    },
    delete: (_id) => {
        return Product.remove({_id});
    },
    update: (data) => {
        const { _id } = data;
        return Product.findOneAndUpdate({_id}, data, {upsert:true});
    }
}

module.exports = productHandle;