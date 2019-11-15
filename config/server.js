const port = process.env.PORT || 4000
const bodyParse = require('body-parser');
const express = require('express');
const server = express();
const allowcors = require('./cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc =require('swagger-jsdoc')

server.use(bodyParse.urlencoded({extended : true}));
server.use(bodyParse.json());
server.use(allowcors);

const swaggerDefinition = {
    info: {
        title: 'StockApi',
        version: '1.0',
        description: 'Descricao'
    },
    host: 'localhost:4000',
    basePath: '/'    
};

const options = {
    swaggerDefinition,
    apis: ['./config/swagger.js']
};

const swaggerSpec = swaggerJSDoc(options);

server.get('/swagger.json', function(req,res){
    res.setHeader('Content-Type', 'aplication/json');
    req.send(swaggerSpec);
});


server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

server.listen(port, function(){
    console.log(`Aplicacao rodando na porta ${port}`)
})

module.exports = server;