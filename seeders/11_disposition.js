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
    // await queryInterface.bulkInsert('Dispositions', [{
    //   disposition_name: "Home", 
    //   ClientId: 1,
    //   LocationId: 1
    // },
    // {
    //   disposition_name: "Transfer",
    //   ClientId: 1,
    //   LocationId: 1
    // },
    // {
    //   disposition_name: "AMA",
    //   ClientId: 1,
    //   LocationId: 1
    // },
    // {
    //   disposition_name: "Facility",
    //   ClientId: 1,
    //   LocationId: 1
    // },
    // {
    //   disposition_name: "Nursing Home",
    //   ClientId: 1,
    //   LocationId: 1
    // },
    // ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Dispositions', null, {});
  }
};
