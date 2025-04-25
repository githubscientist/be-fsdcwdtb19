const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    },
    services: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Service',
            required: true
        }
    ],
    totalPrice: {
        type: Number
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Booking', bookingSchema, 'bookings');