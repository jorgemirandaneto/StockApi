'use strict';
module.exports = (sequelize, DataTypes) => {
  const Mesuare = sequelize.define('Mesuare', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    description : {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {sequelize, modelName: 'mesuare',tableName:'Mesuare' ,schema: 'stock'});
  Mesuare.associate = function (models) {
   Mesuare.hasMany(models.Item, {foreignKey: 'mesuareId',targetKey: 'id'})
  };
  return Mesuare;
};