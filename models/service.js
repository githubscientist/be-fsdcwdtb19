const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number
}, { timestamps: true });

module.exports = mongoose.model('Service', serviceSchema, 'services');