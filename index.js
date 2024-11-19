const express = require('express')
const posts = require('./posts.js')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Server del mio blog')
})

app.get('/bacheca', (req, res) => {
    console.log(req.query.limit);
    res.json({
        result: posts.slice(0,req.query.limit),
        count: posts.length,
    })
})

app.listen(port, () => {
console.log(port)
})