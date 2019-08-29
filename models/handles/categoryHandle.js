const { Category } = require('../');

const categoryHandle = {
    get: () => {
        return Category.find();
    },
    create: (data) => {
        return Category.create(data);
    },
    findOneById: (_id) => {
        return Category.findOne({_id});
    },
    delete: (_id) => {
        return Category.remove({_id});
    },
    update: (data) => {
        const { _id } = data;
        return Category.findOneAndUpdate({_id}, data, {upsert:true});
    }
}

module.exports = categoryHandle;