'use strict';
module.exports = (sequelize, DataTypes) => {
  const Mesuare = sequelize.define('Mesuare', {
    id: DataTypes.INTEGER
  }, {});
  Mesuare.associate = function(models) {
    // associations can be defined here
  };
  return Mesuare;
};