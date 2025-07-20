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
    await queryInterface.bulkInsert('SecDiagFeedbacks', [{
      feedback_name: "Specificity",
      ClientId: 1,
      LocationId: 1
    },
    {
      feedback_name: "Combination code",
      ClientId: 1,
      LocationId: 1
    },
    {
      feedback_name: "Sequencing",
      ClientId: 1,
      LocationId: 1
    },
    {
      feedback_name: "Add-on code",
      ClientId: 1,
      LocationId: 1
    },
    {
      feedback_name: "Sign&Symp Vs Definite Diagnosis",
      ClientId: 1,
      LocationId: 1
    },
    {
      feedback_name: "Documentation Vs DX appended",
      ClientId: 1,
      LocationId: 1
    },
    {
      feedback_name: "Status",
      ClientId: 1,
      LocationId: 1
    },
    {
      feedback_name: "External Cause code",
      ClientId: 1,
      LocationId: 1
    },
    {
      feedback_name: "ICD Guideline not followed",
      ClientId: 1,
      LocationId: 1
    },
    {
      feedback_name: "Condition not addressed",
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
    await queryInterface.bulkDelete('SecDiagFeedbacks', null, {});
  }
};
