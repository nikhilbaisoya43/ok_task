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
    await queryInterface.bulkInsert('Priorities', [{
      priority_name: "Critical",
      // LocationId: 1,
      // ClientId: 1
    },
    {
      priority_name: "High",
      // LocationId: 1,
      // ClientId: 1
    },
    {
      priority_name: "Medium",
      // LocationId: 1,
      // ClientId: 1
    },
    {
      priority_name: "Low",
      // LocationId: 1,
      // ClientId: 1
    }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Priorities', null, {});
  }
};
