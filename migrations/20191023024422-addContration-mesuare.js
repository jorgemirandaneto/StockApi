'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      {
        tableName: 'Item',
        schema: 'stock',
      }, 'mesuare_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Mesuare',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT'
    }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn({ talbeName: 'Item', schema: 'stock' }, 'mesuareId')

  }
};
