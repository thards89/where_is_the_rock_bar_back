'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "moreImages",
      [
        {
          ImageUrl:"https://pr1.nicelocal.co.nl/zSgE_vs7sVMiaW12lvx8eg/640x360,q85/4px-BW84_n0QJGVPszge3NRBsKw-2VcOifrJIjPYFYkOtaCZxxXQ2e9d7-5rmHvDLLQ_O0ROKw5jvFh6yKjSLoJio9zhAaPLkyT4ZReGE_VjDXD3UBcqcQ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ImageUrl:"https://media.indebuurt.nl/eindhoven/2017/03/14015645/the-jack-eindhoven.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("moreImages", null, {});
  }
};
