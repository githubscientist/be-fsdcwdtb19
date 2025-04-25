const Service = require('../models/service');

const serviceController = {
    createService: async (req, res) => {
        try {
            const { name, description, price } = req.body;

            // check if the service already exists
            const serviceExists = await Service.findOne({ name });

            if (serviceExists) {
                return res.status(400).json({ message: 'Service already exists' });
            }

            // create a new service
            const newService = new Service({
                name,
                description,
                price
            });

            // save the service to the database
            await newService.save();

            // return the response
            res.status(201).json({
                message: 'Service created'
            });
        } catch (error) {
            res.status(500).json({ message: 'Create service failed' });
        }
    },
    getAllServices: async (req, res) => {
        try {
            const services = await Service.find();

            res.status(200).json(services);
        } catch (err) {
            res.status(500).json({ message: 'Get all services failed' });
        }
    },
    getServiceById: async (req, res) => {
        const { id } = req.params;

        try {
            const service = await Service.findById(id);

            if (!service) {
                return res.status(404).json({ message: 'Service not found' });
            }

            res.status(200).json(service);
        } catch (err) {
            res.status(500).json({ message: 'Get service by ID failed' });
        }
    },
    updateService: async (req, res) => {
        const { id } = req.params;
        const { name, description, price } = req.body;

        try {
            const service = await Service.findByIdAndUpdate(id, {
                name,
                description,
                price
            }, { new: true });

            if (!service) {
                return res.status(404).json({ message: 'Service not found' });
            }

            res.status(200).json(service);
        } catch (err) {
            res.status(500).json({ message: 'Update service failed' });
        }
    },
    deleteService: async (req, res) => {
        const { id } = req.params;

        try {
            const service = await Service.findByIdAndDelete(id);

            if (!service) {
                return res.status(404).json({ message: 'Service not found' });
            }

            res.status(200).json({ message: 'Service deleted' });
        } catch (err) {
            res.status(500).json({ message: 'Delete service failed' });
        }
    }
}

module.exports = serviceController;