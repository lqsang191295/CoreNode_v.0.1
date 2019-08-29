const mongoose = require('mongoose');

const ProducerSchema = new mongoose.Schema({
    name: { type: String, index: true, required: true },
    image: String,
    address: String,
    phone: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Producer', ProducerSchema);
