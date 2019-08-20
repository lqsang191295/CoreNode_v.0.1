const mongoose = require('mongoose');

const producerSchema = new mongoose.Schema({
    name: { type: String, index: true, required: true },
    image: String,
    address: String,
    product_id: Array
}, {
    timestamps: true
});

module.exports = mongoose.model('Producer', producerSchema);
