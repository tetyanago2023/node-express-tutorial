// app.js

console.log('Express Tutorial');

const express = require('express');
const app = express();

const people = require('./routes/people');
const auth = require('./routes/auth')

// static assets
app.use(express.static('./methods-public'));
// parse form data
app.use(express.urlencoded({extended: false}))

// parse json
app.use(express.json())

app.use('/api/people', people)
app.use('/login', auth)

app.post('/login', (req, res) => {
    const { name } = req.body;
    if(name) {
        return res.status(200).send(`Welcome ${name}!`)
    }
    res.status(401).send('Please provide credentials');
})

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
})
