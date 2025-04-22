const User = require('../models/user');
const bcrypt = require('bcrypt');

const userController = {
    register: async (req, res) => {
        try {
            // get the details from the request body
            const { name, email, password } = req.body;

            // check if the user already exists
            const user = await User.findOne({ email });

            if (user) {
                return res.status(500).json({ message: 'User already exists' });
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            // create a new user model object
            const newUser = new User({
                name,
                email,
                password: hashedPassword
            });

            // save to the database
            await newUser.save();

            // send a response back to the client
            res.status(201).json({ message: 'User registered successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Registration failed' });
        }
    },
    login: async (req, res) => {
        try {
            res.status(200).json({ message: 'User logged in successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Login failed' });
        }
    },
    logout: async (req, res) => {
        try {
            res.status(200).json({ message: 'User logged out successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Logout failed' });
        }
    },
    me: async (req, res) => {
        try {
            res.status(200).json({ message: 'User profile retrieved successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Failed to retrieve user profile' });
        }
    }
}

module.exports = userController;