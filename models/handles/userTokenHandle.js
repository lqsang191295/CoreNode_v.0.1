const { UserToken } = require('..');

const userTokenHandle = {
    get: () => {
        return UserToken.find();
    },
    create: (data) => {
        return UserToken.create(data);
    },
    findOneById: (_id) => {
        return UserToken.findOne({_id});
    },
    delete: (_id) => {
        return UserToken.remove({_id});
    },
    update: (data) => {
        const { username } = data;
        return UserToken.findOneAndUpdate({username}, data);
    },
    findOneByUsername: (username) => {
        return UserToken.findOne({username});
    }
}

module.exports = userTokenHandle;