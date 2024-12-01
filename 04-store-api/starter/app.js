// app.js

console.log('04 Store API')

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;



app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
