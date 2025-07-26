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
    // await queryInterface.bulkInsert('ResponsibleParties', [{
    //   resp_party_name: "Pharmacy",
    //   ClientId: 1,
    //   LocationId: 1
    // },
    // {
    //   resp_party_name: "Nursing",
    //   ClientId: 1,
    //   LocationId: 1
    // },
    // {
    //   resp_party_name: "DP",
    //   ClientId: 1,
    //   LocationId: 1
    // },
    // {
    //   resp_party_name: "Missing Information",
    //   ClientId: 1,
    //   LocationId: 1
    // },
    // {
    //   resp_party_name: "System",
    //   ClientId: 1,
    //   LocationId: 1
    // },
    // {
    //   resp_party_name: "Stop Time",
    //   ClientId: 1,
    //   LocationId: 1
    // },
    // {
    //   resp_party_name: "Finalised",
    //   ClientId: 1,
    //   LocationId: 1
    // }
    // ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('ResponsibleParties', null, {});
  }
};
