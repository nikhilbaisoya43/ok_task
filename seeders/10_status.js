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
     * }], {});
    */
    // await queryInterface.bulkInsert('Statuses', [
    // //   {
    // //   status_name: "Open",
    // //   LocationId: 1,
    // //   ClientId: 1
    // // },
    // // {
    // //   status_name: "Complete",
    // //   LocationId: 1,
    // //   ClientId: 1
    // // },
    // // {
    // //   status_name: "Incomplete",
    // //   LocationId: 1,
    // //   ClientId: 1
    // // }
    // ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Statuses', null, {});
  }
};
