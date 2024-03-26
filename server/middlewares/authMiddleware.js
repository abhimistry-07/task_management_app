const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');


const authenticate = async (req, res, next) => {
    let token;

    if (req.headers.authorization) {
        try {
            token = req.headers.authorization.split(" ")[1];

            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            req.user = await userModel.findById(decoded.id).select('-password');

            next();
        } catch (error) {
            res.status(401).send({ message: 'Not authorized, token failed!' })
        }
    } else {
        return res.send({ msg: 'Please login first' });
    }
}

module.exports = authenticate;