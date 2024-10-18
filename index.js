const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('hello world v2')
})

app.listen(4000, async () => {
    console.log('Server listening on 4000')
})