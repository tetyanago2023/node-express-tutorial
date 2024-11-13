// 06-basic-json.js

const express = require('express');
const app = express();
const { products } = require('../data');

app.get('/', (req, res) => {
    res.json(products)
})

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
})
