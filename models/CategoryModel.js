const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: { type: String, index: true, required: true },
    image: String,
    address: String,
    product_id: Array
}, {
    timestamps: true
});

module.exports = mongoose.model('Category', categorySchema);
