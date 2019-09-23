module.exports = function(app){
    const item = require('../api/itemcontroller')
    app.get('/api/item', item.findAll);
}