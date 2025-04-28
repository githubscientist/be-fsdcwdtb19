const express = require('express');
const { createBooking, getAllBookings, getBookingById, updateBooking, deleteBooking, getBookingsByUserId, getBookingsByCustomerId, getBookingsByServices, getBookingByQueryId } = require('../controllers/bookingController');
const { isAuthenticated, allowRoles } = require('../middlewares/auth');

const bookingRouter = express.Router();

bookingRouter.post(
    '/',
    isAuthenticated,
    allowRoles(['admin', 'receptionist', 'manager']),
    createBooking
);

bookingRouter.get('/all', getAllBookings);
bookingRouter.get('/booking', getBookingByQueryId)
bookingRouter.get('/:id', getBookingById);
bookingRouter.put('/:id', updateBooking);
bookingRouter.delete('/:id', deleteBooking);

bookingRouter.get('/user/:userId', getBookingsByUserId);
bookingRouter.get('/customer/:customerId', getBookingsByCustomerId);
bookingRouter.get('/service/', getBookingsByServices);

module.exports = bookingRouter;