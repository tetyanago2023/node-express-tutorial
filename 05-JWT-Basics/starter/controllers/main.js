// controllers/main.js

require('dotenv').config();
const jwt = require('jsonwebtoken');
const { BadRequest } = require('../errors');

const login = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        throw new BadRequest(`Please provide name and password`)
    }
// just a demo, usually provided by the db
    const id = new Date().getDate();

// try to keep payload small, better experience for user
    const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn: '30d'})

    res.status(200).json({msg: `User created`, token});
}

const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random() * 100)
    res.status(200).json({msg: `Hello, ${req.user.username}!`,
        secret: `Here is your authorized data, your lucky number is ${luckyNumber}`})
}

module.exports = {
    login,
    dashboard,
}
