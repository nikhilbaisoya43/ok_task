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
    await queryInterface.bulkInsert('EdEmFeedbacks', [{
      feedback_name: "Overcoded",
      ClientId: 1,
      LocationId: 1
    },
    {
      feedback_name: "Undercoded",
      ClientId: 1,
      LocationId: 1
    },
    {
      feedback_name: "Missed EM",
      ClientId: 1,
      LocationId: 1
    },
    {
      feedback_name: "EM Category",
      ClientId: 1,
      LocationId: 1
    },
    {
      feedback_name: "Client Guideline not followed",
      ClientId: 1,
      LocationId: 1
    },
    {
      feedback_name: "Other",
      ClientId: 1,
      LocationId: 1
    },

    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('EdEmFeedbacks', null, {});
  }
};
