'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('moreImages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ImageUrl: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        get: function() { // or use get(){ }
          return this.getDataValue('createdAt')
            .toLocaleString('en-GB', { timeZone: 'UTC' });
        }
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        get() {
          return moment(this.getDataValue('createdAt')).format('DD/MM/YYYY h:mm:ss');
      }
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('moreImages');
  }
};