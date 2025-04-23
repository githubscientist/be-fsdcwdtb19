const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../utils/config');

const auth = {
    isAuthenticated: (req, res, next) => {
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
    }
}

module.exports = auth;