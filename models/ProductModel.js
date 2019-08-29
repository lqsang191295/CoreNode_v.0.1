const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: { type: String, index: true, required: true },
    description: String,
    image: String,
    address: String,
    category_id: String,
    producer_id: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', ProductSchema);
