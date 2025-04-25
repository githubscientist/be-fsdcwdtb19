const express = require('express');
const { createService, getAllServices, getServiceById, updateService, deleteService } = require('../controllers/serviceController');

const serviceRouter = express.Router();

serviceRouter.post('/', createService);
serviceRouter.get('/', getAllServices);
serviceRouter.get('/:id', getServiceById);
serviceRouter.put('/:id', updateService);
serviceRouter.delete('/:id', deleteService);

module.exports = serviceRouter;