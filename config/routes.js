module.exports = function(app){
    
    const item = require('../api/itemcontroller')
        
    app.get('/api/item', item.findAll);

    app.post('/api/item', item.create);

    app.get('/api/item/:id', item.findById);

    app.put('/api/item/:id', item.update);

    app.delete('/api/item/:id', item.delete);
}   