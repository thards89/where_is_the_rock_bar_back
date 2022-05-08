"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "blogs",
      [
        {
          title: "Heavy Metal Night in Eindhoven",
          description:
            "Locate at muiden.Its a huge fort.We can spend whole day.Its amazing experience.jfsjgfsjgjksdgfkdjsfgdsjfgsdjgfksgjskruritrgjbgdmngbjsrstsjkbsmgurtysrjk,bmjrgituertksejhjkfbsjgsr",
          mainImageUrl:
            "https://www.thisiseindhoven.com/getmedia/b2221c0d-f1cc-4d52-8a71-e32c7737f449/Cafe-the-Jack.jpg",
          name_of_place: "Café The Jack",
          location: "Eindhoven",
          visitedOn: "09/08/2021",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("blogs", null, {});
  },
};
