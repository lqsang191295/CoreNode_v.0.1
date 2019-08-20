const Producer = require('../');

const producerHandle = {
    get: () => {
        return Producer.find();
    },
    create: (data) => {
        return Producer.create(data);
    },
    findOneById: (_id) => {
        return Producer.findOne({_id});
    },
    delete: (_id) => {
        return Producer.remove({_id});
    },
    update: (data) => {
        const { _id } = data;
        return Producer.findOneAndUpdate({_id}, data, {upsert:true});
    }
}

module.exports = producerHandle;