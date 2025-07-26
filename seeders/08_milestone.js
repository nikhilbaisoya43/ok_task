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
    await queryInterface.bulkInsert('Milestones', [{
      milestone_name: "Ready to Allocate",
      // LocationId: 1,
      // ClientId: 1
    },
    {
      milestone_name: "Ready to Code",
      // LocationId: 1,
      // ClientId: 1
    },
    {
      milestone_name: "Coding in Progress",
      // LocationId: 1,
      // ClientId: 1
    },
    {
      milestone_name: "Coding Done",
      // LocationId: 1,
      // ClientId: 1
    },
    {
      milestone_name: "Ready to Audit",
      // LocationId: 1,
      // ClientId: 1
    },
    {
      milestone_name: "Audit in Progress",
      // LocationId: 1,
      // ClientId: 1
    },
    {
      milestone_name: "Audit Done",
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
    await queryInterface.bulkDelete('Milestones', null, {});
  }
};
