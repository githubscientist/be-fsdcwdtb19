const express = require('express');
const { uploadSingleFile } = require('../controllers/uploadController');
const upload = require('../utils/upload');

const uploadRouter = express.Router();

uploadRouter.post('/single', upload.single('file'), uploadSingleFile);

module.exports = uploadRouter;