const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    username: { type: String, index: true, required: true, unique: true },
    password: { type: String, required: true },
    email: String,
    name: String,
}, {
    timestamps: true
});

userSchema.pre('save', async function (next) {
    try {
        const hash = await bcrypt.hash(this.password, 10);
        this.password = hash;
        return next();
    } catch (err) {
        return next(err);
    }
});

userSchema.methods.comparePassword = async function (password) {
    try {
        const result = await bcrypt.compare(password, this.password);
        return result;
    } catch (err) {
        return err;
    }
}

module.exports = mongoose.model('User', userSchema);