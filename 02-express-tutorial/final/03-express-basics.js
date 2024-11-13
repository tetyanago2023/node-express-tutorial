// 03-express-basics.js

const express = require('express');
const app = express();

// home
app.get('/', (req, res) => {
    console.log('user hits the resource')
    res.status(200).send('Home Page');
})

// about
app.get('/about', (req, res) => {
    // console.log('user hits the resource')
    res.status(200).send('About Page');
})

// 404
app.all('*', (req, res) => {
    res.status(404).send('<h4>resource not found</h4>');
})
app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
})

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
// app.route