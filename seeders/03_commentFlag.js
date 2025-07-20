'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     *
     *  }], {});
    */
    await queryInterface.bulkInsert('CommentFlags', [
      {
        flag: "Accepted",
        LocationId: 1,
        ClientId: 1
      },
      {
        flag: "Rejected",
        LocationId: 1,
        ClientId: 1
      },
      {
        flag: "Reply",
        LocationId: 1,
        ClientId: 1
      }
    ]
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('CommentFlags', null, {});
  }
};
