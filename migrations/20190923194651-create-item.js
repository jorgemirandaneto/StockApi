'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Item', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: Sequelize.Now
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    },
      { modelName: 'item', tableName: 'Item', schema: 'stock' }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Items');
  }
};