"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "blogs",
      [
        {
          title: "Fort visit",
          description:
            "Locate at muiden.Its a huge fort.We can spend whole day.Its amazing experience.jfsjgfsjgjksdgfkdjsfgdsjfgsdjgfksgjskruritrgjbgdmngbjsrstsjkbsmgurtysrjk,bmjrgituertksejhjkfbsjgsr",
          mainImageUrl:
            "https://nieuwehollandsewaterlinie.nl/app/uploads/2018/01/Muiderslot-600x399.jpg",
          name_of_place: "Muiden Fort",
          location: "Muiden",
          visitedOn: "09/08/2021",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },
        {
          title: "Mini Amsterdam",
          description: `Located near Den haag.Best place visited so far.Its amazing experience.
          jfsjgfsjgjksdgfkdjsfgdsjfgsdjgfksgjskruritrgjbgdmngbjsrstsjkbsmgurtysrjk,bmjrgituertksejhjkfbsjgsr`,
          mainImageUrl:
            "https://www.netherlands-tourism.com/wp-content/uploads/2013/11/Madurodam-Netherlands.jpg",
          name_of_place: "Madurodam",
          location: "Den haag",
          visitedOn: "05/01/2022",
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
