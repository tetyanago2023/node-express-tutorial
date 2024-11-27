// app.js

console.log('Task Manager App')

const express = require('express');
const app = express();
const PORT = 3000;
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();

app.use(express.static('./public'));
app.use(express.json());
app.use('/api/v1/tasks', tasks);

const start = async () => {
    try {
    await connectDB(process.env.MONGO_URI);
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.log(error);

    }
}

start();

