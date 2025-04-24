const Customer = require('../models/customer');

const customerController = {
    createCustomer: async (req, res) => {
        try {
            // get the details from the request body
            const { name, email, phone, address } = req.body;

            // check if the customer already exists - using email.
            const existingCustomer = await Customer.findOne({ email });

            if (existingCustomer) {
                return res.status(400).json({ message: 'Customer already exists' });
            }

            // create the customer object
            const newCustomer = new Customer({
                name,
                email,
                phone,
                address
            });

            // save the customer to the database
            await newCustomer.save();

            // send the response
            res.status(201).json({ message: 'Customer created' });
        } catch (error) {
            res.status(500).json({ message: 'Cannot create customer', error });
        }
    },
    getAllCustomers: async (req, res) => {
        try {
            // get all customers from the database
            const customers = await Customer.find().select('-__v');

            // send the response with all the customers
            res.status(200).json(customers);
        } catch (error) {
            res.status(500).json({ message: 'Cannot get customers', error });
        }
    },
    getCustomerById: async (req, res) => {
        try {
            const { id } = req.params;

            const customer = await Customer.findById(id).select('-__v');

            if (!customer) {
                return res.status(404).json({ message: 'Customer not found' });
            }

            res.status(200).json(customer);
        } catch (error) {
            res.status(500).json({ message: 'Cannot get customer', error });
        }
    },
    updateCustomer: async (req, res) => {
        try {
            const { id } = req.params;
            const { name, email, phone, address } = req.body;

            await Customer.findByIdAndUpdate(id, { name, email, phone, address });

            res.status(200).json({ message: 'Customer updated' });
        } catch (error) {
            res.status(500).json({ message: 'Cannot update customer', error });
        }
    },
    deleteCustomer: async (req, res) => {
        try {
            const { id } = req.params;

            const customer = await Customer.findById(id);

            if (!customer) {
                return res.status(404).json({ message: 'Customer not found' });
            }

            await Customer.findByIdAndDelete(id);

            res.status(200).json({ message: 'Customer deleted' });
        } catch (error) {
            res.status(500).json({ message: 'Cannot delete customer', error });
        }
    }
}

module.exports = customerController;