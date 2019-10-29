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
    },
    mesuare_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, { sequelize, modelName: 'item', tableName: 'Item', schema: 'stock' });
  Item.associate = function (models) {
    Item.belongsTo(models.mesuare, { foreignKey: 'mesuareId', as: 'mesuare' })
  };
  return Item;
};