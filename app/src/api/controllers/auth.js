const jwt = require('jsonwebtoken');
const keys = require('../../keys/keys');
const User = require('../models/user');
const Response = require('../models/response');

module.exports.ensureAuthenticated = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(422).json(Response.create(Response.ERROR, 'Token is missing.'));
    }

    const verifyOptions = {
        expiresIn: process.env.JWT_VALIDITY,
        algorithm: [process.env.JWT_ALGORITHM]
    }

    jwt.verify(token, keys.publicKey, verifyOptions, (err, payload) => {
        if (err) {
            res.status(401).json(Response.create(Response.ERROR, err));
        } else {
            User.findById(payload.userId, (err, user) => {
                if (!user) {
                    return res.status(401).json(Response.create(Response.ERROR, 'User not found.'));
                } else {
                    req.body.user = user;
                    next();
                }
            });
        }
    });
};
