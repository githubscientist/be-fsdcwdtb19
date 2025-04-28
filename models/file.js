const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    name: String,
    path: String,
    size: Number,
    type: String,
}, { timestamps: true });

module.exports = mongoose.model('File', fileSchema, 'files');