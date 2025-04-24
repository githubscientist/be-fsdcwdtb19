const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../utils/config');
const User = require('../models/user');

const auth = {
    isAuthenticated: async (req, res, next) => {
        try {
            // get the token from the request header
            const token = req.cookies.token;

            // verify the token
            const decoded = jwt.verify(token, JWT_SECRET);

            req.userId = decoded.id;

            next();
        } catch (error) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
    },
    allowRoles: (roles) => {
        return async (req, res, next) => {
            try {
                // get the id from the request object
                const userId = req.userId;

                // get the user from the database
                const user = await User.findById(userId);

                // check if the user has the required role
                if (!roles.includes(user.role)) {
                    return res.status(403).json({ message: 'Forbidden' });
                }

                // if the user has the required role, call the next middleware
                next();
            } catch (error) {
                return res.status(403).json({ message: 'Forbidden' });
            }
        }
    }
}

module.exports = auth;