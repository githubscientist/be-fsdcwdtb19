const express = require('express');
const { viewFile } = require('../controllers/fileController');

const fileRouter = express.Router();

fileRouter.get('/view/:fileId', viewFile);

module.exports = fileRouter;