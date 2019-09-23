'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {sequelize, modelName: 'item',tableName:'Item' ,schema: 'stock'});
  Item.associate = function(models) {
    // associations can be defined here
  };
  return Item;
};