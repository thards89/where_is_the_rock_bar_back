'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "moreImages",
      [
        {
          ImageUrl:"https://nl.wikipedia.org/wiki/Westbatterij#/media/Bestand:Overzicht_westbatterij_-_Muiden_-_20340676_-_RCE.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ImageUrl:"https://nieuwehollandsewaterlinie.nl/app/uploads/2018/04/Westbatterij-Muiden-met-vlag-600x399.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ImageUrl:"https://cdn.getyourguide.com/img/location/5db943f5e0bec.jpeg/88.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ImageUrl:"https://www.madurodam.nl/sites/madurodam_corp/files/Entree%20van%20Madurodam%20%28bron%20Madurodam%29.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ImageUrl:"https://media-cdn.tripadvisor.com/media/photo-s/10/be/24/f3/caption.jpg",
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
