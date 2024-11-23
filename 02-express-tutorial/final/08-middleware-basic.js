// 08-middleware-basic.js

const express = require('express');
const app = express();
// req => middleware => res

const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    // res.send('Testing')
    next()
}
app.get('/', logger, (req, res) => {
    res.status(200).send('Home Page');
});

app.get('/about', logger, (req, res) => {
    res.status(200).send('About Page');
});
