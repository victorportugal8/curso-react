const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const permitirCors = require('./cors')
const queryParser = require('express-query-int')

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(permitirCors)
server.use(queryParser())

server.listen(port, function(){
    console.log(`BACK-END está rodando na porta ${port}.`)
})

module.exports = server