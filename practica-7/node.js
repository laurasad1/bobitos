const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send("<h1> Estas en Home <h1>"));

app.get('/contact', (req, res) => res.send("<h1> Estas en contact <h1>"));

app.get('/about', (req, res) => res.send("<h1> Estas en about <h1>"));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));