const port = process.env.PORT || 4000
const bodyParse = require('body-parser');
const express = require('express');
const server = express();
const allowcors = require('./cors');

server.use(bodyParse.urlencoded({extended : true}));
server.use(bodyParse.json());
server.use(allowcors);

server.listen(port, function(){
    console.log(`Aplicacao rodando na porta ${port}`)
})

module.exports = server;