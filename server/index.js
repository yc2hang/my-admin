const express = require('express');
const app = express();

app.use(require("cors")())

app.get('/', async(req, res) => {
    res.send('nihao ')
})

app.listen(3001, () => {
    console.log('http://localhost:3001')
})