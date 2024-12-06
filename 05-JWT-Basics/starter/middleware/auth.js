// auth.js

const jwt = require('jsonwebtoken');
const CustomAPIError = require('../errors/custom-error');

const authenticationMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new CustomAPIError(`No token provided`, 401)
    }

    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const { id, username } = decoded;

        req.user  = { id, username }
        next();
        // const luckyNumber = Math.floor(Math.random() * 100)
        // res.status(200).json({msg: `Hello, ${decoded.username}!`,
        //     secret: `Here is your authorized data, your lucky number is ${luckyNumber}`})
    } catch (error){
        throw new CustomAPIError(`Not authorized to access this route`, 401)
    }


}

module.exports = authenticationMiddleware;
