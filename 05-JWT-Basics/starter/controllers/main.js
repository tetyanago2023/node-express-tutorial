// controllers/main.js

const CustomAPIError = require('../Errors/custom-error');

const login = async (req, res) => {
    const { name, password } = req.body;

    if (!name || !password) {
        throw new CustomAPIError(`Please provide name and password`, 400)
    }

    res.send(`Fake Login/Register/Signup Route`)
}

const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random() * 100)
    res.status(200).json({msg: `Hello, John doe!`,
        secret: `Here is your authorized data, your lucky number is ${luckyNumber}`})
}

module.exports = {
    login,
    dashboard,
}
