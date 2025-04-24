const express = require('express');
const { createCustomer, getAllCustomers, getCustomerById, updateCustomer, deleteCustomer } = require('../controllers/customerController');
const { isAuthenticated, allowRoles } = require('../middlewares/auth');

const customerRouter = express.Router();

// protected routes, allowRoles: ['receptionist', 'manager', 'admin']
customerRouter.post('/', isAuthenticated, createCustomer);
customerRouter.get('/', isAuthenticated, getAllCustomers);
customerRouter.get('/:id', isAuthenticated, getCustomerById);

// protected routes, allowRoles: ['manager', 'admin']
customerRouter.put('/:id', isAuthenticated, allowRoles(['manager', 'admin']), updateCustomer);
customerRouter.delete('/:id', isAuthenticated, allowRoles(['manager', 'admin']), deleteCustomer);

module.exports = customerRouter;