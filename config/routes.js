const express = require('express');

module.exports = function(serve){
    // exemplo
    const router = express.Router();
    serve.use('/api', router);

    const ItemService = require('../api/itemcontroller');
    TodoService.register(router , '/item');   

}