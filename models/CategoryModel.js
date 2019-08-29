const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: { type: String, index: true, required: true }
}, {
    timestamps: true
});

module.exports = mongoose.model('Category', CategorySchema);
