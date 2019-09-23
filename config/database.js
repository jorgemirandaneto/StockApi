const Sequelize = require('sequelize');


const sequelize = new Sequelize('aziyewem', 'aziyewem', '4P2mTfe11A60R1WGF9smjanZWbiCpb7r', {
    host: 'elmer.db.elephantsql.com',
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

db.item = require('../models/item')(sequelize, Sequelize);

module.exports = db;