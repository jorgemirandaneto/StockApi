const Sequelize = require('sequelize');
const Model = Sequelize.Model;

class Item extends Model { }

Item.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    }, quantidade: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false
    },
    dateCreate: {
        type: Sequelize.DATE,
        allowNull: false
    },
    dateUpdate: {
        type: Sequelize.DATE,
        allowNull: true
    }
},
    { sequelize, modelName: 'item',tableName:'Item' }
)
