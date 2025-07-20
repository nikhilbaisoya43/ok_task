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
    await queryInterface.bulkInsert('ModifierFeedbacks', [{
      feedback_name: "Revenue Modifier",
      ClientId: 1,
      LocationId: 1
    },
    {
      feedback_name: "Laterality Modifier",
      ClientId: 1,
      LocationId: 1
    },
    {
      feedback_name: "Invalid Modifier",
      ClientId: 1,
      LocationId: 1
    },
    {
      feedback_name: "CCI edit",
      ClientId: 1,
      LocationId: 1
    },
    {
      feedback_name: "HCPCS Modifier",
      ClientId: 1,
      LocationId: 1
    },
    {
      feedback_name: "Information Modifier",
      ClientId: 1,
      LocationId: 1
    },
    {
      feedback_name: "Other",
      ClientId: 1,
      LocationId: 1
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
    await queryInterface.bulkDelete('ModifierFeedbacks', null, {});
  }
};
