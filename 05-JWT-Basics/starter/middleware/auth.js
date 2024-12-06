// auth.js

const jwt = require('jsonwebtoken');
const CustomAPIError = require('../errors/custom-error');

const authenticationMiddleware = async (req, res, next) => {
    console.log(req.headers.authorization);
    next();
}

module.exports = authenticationMiddleware;
