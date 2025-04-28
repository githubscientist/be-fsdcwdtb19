const Service = require('../models/service');
const Booking = require('../models/booking');
const { sendEmail } = require('../utils/emailService');
const Customer = require('../models/customer');

const bookingController = {
    createBooking: async (req, res) => {
        try {
            // get the user id from the request
            const userId = req.userId;

            // get the customerId and services from the request body
            const { customerId, services } = req.body;

            // check if the customerId and services are provided
            if (!customerId || !services) {
                return res.status(400).json({ message: "customerId and services are required" });
            }

            // check if the services are an array
            if (!Array.isArray(services)) {
                return res.status(400).json({ message: "services must be an array" });
            }

            // check if the services are not empty
            if (services.length === 0) {
                return res.status(400).json({ message: "services cannot be empty" });
            }

            // check if the userId is valid
            if (!userId) {
                return res.status(400).json({ message: "userId is required" });
            }

            const servicesList = await Service.find({ _id: { $in: services } });

            const totalPrice = servicesList.reduce((acc, service) => {
                return acc + service.price;
            }, 0);

            // create a new booking
            const newBooking = new Booking({
                userId,
                customerId,
                services,
                totalPrice
            });

            const customer = await Customer.findById(customerId);

            // save the booking to the database
            await newBooking.save();

            // send email to the user
            await sendEmail(customer.email, "Booking Confirmation", `Your booking has been confirmed. The total price is ${totalPrice}.`);

            // return the response
            res.status(201).json({
                message: "Booking created"
            });
        } catch (err) {
            res.status(500).json({ message: "create booking failed" });
        }
    },
    getAllBookings: async (req, res) => {
        try {
            const bookings = await Booking.find().populate({ path: 'userId', select: '-password -__v -createdAt -updatedAt' }).populate('customerId').populate('services');

            res.status(200).json(bookings);
        } catch (error) {
            res.status(500).json({ message: "get all bookings failed" });
        }
    },
    getBookingById: async (req, res) => {
        try {
            const { id } = req.params;

            const booking = await Booking.findById(id).populate({ path: 'userId', select: '-password -__v -createdAt -updatedAt' }).populate('customerId').populate('services');

            if (!booking) {
                return res.status(404).json({ message: 'Booking not found' });
            }

            res.status(200).json(booking);
        } catch (error) {
            res.status(500).json({ message: 'Cannot get booking by id' });
        }
    },
    getBookingByQueryId: async (req, res) => {
        try {
            // const { id } = req.query;
            const { id } = req.body;

            const booking = await Booking.findById(id).populate({ path: 'userId', select: '-password -__v -createdAt -updatedAt' }).populate('customerId').populate('services');

            if (!booking) {
                return res.status(404).json({ message: 'Booking not found' });
            }

            res.status(200).json(booking);
        } catch (error) {
            res.status(500).json({ message: 'Cannot get booking by query id' });
        }
    }
    ,
    updateBooking: async (req, res) => {
    },
    deleteBooking: async (req, res) => {
    },
    getBookingsByUserId: async (req, res) => {
    },
    getBookingsByCustomerId: async (req, res) => {
    },
    getBookingsByServices: async (req, res) => {
    }
}

module.exports = bookingController;