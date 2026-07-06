const express = require('express')
const app = express()
const server = require('http').Server(app)

app.set('view-engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index.ejs')
})

const port = process.env.PORT || 3000
server.listen((port), (req, res) =>  {
    console.log('Server listening on port', (port))
})