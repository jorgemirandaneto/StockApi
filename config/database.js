const Sequelize = require('sequelize');


const sequelize = new Sequelize('vxrykahd', 'vxrykahd', 'BU3yb3_ZdfAcV8ZSBKlZfUiBkH0aiguO', {
    host: 'salt.db.elephantsql.com',
    dialect: 'postgres'
})

sequelize
    .authenticate()
    .then(() => {
        console.log('Conexão com postgres Ok!');
    })
    .catch(err => {
        console.error('Erro ao conectar ao postgres:', err);
    });


const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.item = require('../Model/item');

module.exports = db;