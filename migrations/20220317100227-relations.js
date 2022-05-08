'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("blogs", "userId", {
      type: Sequelize.INTEGER,
      references: {
      model: "users", 
      key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
      });
      await queryInterface.addColumn("moreImages", "blogId", {
        type: Sequelize.INTEGER,
        references: {
        model: "blogs", 
        key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
        });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("blogs", "userId");
    await queryInterface.removeColumn("moreImages", "blogId");
  }
};
