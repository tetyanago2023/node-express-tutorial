// app.js

console.log('04 Store API')

require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();
const connectDB = require('./db/connect');
const productsRouter = require('./routes/products');
const PORT = process.env.PORT || 3000;
// async errors

const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

// middleware
app.use(express.json());

// routes
app.get('/', (req, res) => {
    res.send('<h1>Store API</h1><a href = "/api/v1/products">products route</a>');
})
app.use('/api/v1/products', productsRouter);

// products route


app.use(notFoundMiddleware);
app.use(errorMiddleware);

const start = async () => {
    try {
        // connectDB
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
}

start();
