const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    address: String,
}, { timestamps: true });

module.exports = mongoose.model('Customer', customerSchema, 'customers');