const {User} = require('../');

const userHandle = {
    get: () => {
        return User.find();
    },
    create: (data) => {
        return User.create(data);
    },
    findOneById: (_id) => {
        return User.findOne({_id});
    },
    delete: (_id) => {
        return User.remove({_id});
    },
    update: (data) => {
        const { _id } = data;
        return User.findOneAndUpdate({_id}, data, {upsert:true});
    },
    findOneByUsername: (username) => {
        return User.findOne({username});
    }
}

module.exports = userHandle;