const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, index: true, required: true },
    description: String,
    image: String,
    address: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', productSchema);
