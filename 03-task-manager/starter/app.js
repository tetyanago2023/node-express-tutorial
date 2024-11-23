// app.js

console.log('Task Manager App')

const express = require('express');
const app = express();
const PORT = 3000;
const tasks = require('./routes/tasks');

app.use(express.static('./public'));
app.use(express.json());
app.use('/api/v1/tasks', tasks);

app.get('/hello', (req, res) => {
    res.status(200).send('Task Manager App');
})



app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
