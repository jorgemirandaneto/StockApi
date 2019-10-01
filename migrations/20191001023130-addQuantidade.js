'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        {
          tableName: 'Item',
          schema: 'stock'
        },
          'amount',
          Sequelize.INTEGER
      )
    ])
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('Item', {schema: 'stock', tableName: 'Item'}, 'quantidade')
    ])
  }
};
