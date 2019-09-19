'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    id: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    quantidade: DataTypes.INTEGER,
    datecreate: DataTypes.DATE,
    dateupdate: DataTypes.DATE
  }, {});
  Item.associate = models => {
  };
  return Item;
};