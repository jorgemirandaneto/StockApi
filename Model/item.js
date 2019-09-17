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
    }
})
