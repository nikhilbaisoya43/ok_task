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
    await queryInterface.bulkInsert('PrimDiagFeedbacks', [{
      feedback_name: "Specificity",
      createdAt: new Date(),
      updatedAt: new Date()
      // ClientId: 1,
      // LocationId: 1 
    },
    {
      feedback_name: "Combination code",
      createdAt: new Date(),
      updatedAt: new Date()
      // ClientId: 1,
      // LocationId: 1
    },
    {
      feedback_name: "Sequencing",
      createdAt: new Date(),
      updatedAt: new Date()
      // ClientId: 1,
      // LocationId: 1
    },
    {
      feedback_name: "Add-on code",
      createdAt: new Date(),
      updatedAt: new Date()
      // ClientId: 1,
      // LocationId: 1
    },
    {
      feedback_name: "Sign&Symp Vs Definite Diagnosis",
      createdAt: new Date(),
      updatedAt: new Date()
      // ClientId: 1,
      // LocationId: 1
    },
    {
      feedback_name: "Documentation Vs DX appended",
      createdAt: new Date(),
      updatedAt: new Date()
      // ClientId: 1,
      // LocationId: 1
    },
    {
      feedback_name: "Status",
      createdAt: new Date(),
      updatedAt: new Date()
      // ClientId: 1,
      // LocationId: 1
    },
    {
      feedback_name: "External Cause code",
      createdAt: new Date(),
      updatedAt: new Date()
      // ClientId: 1,
      // LocationId: 1
    },
    {
      feedback_name: "ICD Guideline not followed",
      createdAt: new Date(),
      updatedAt: new Date()
      // ClientId: 1,
      // LocationId: 1
    },
    {
      feedback_name: "Condition not addressed",
      createdAt: new Date(),
      updatedAt: new Date()
      // ClientId: 1,
      // LocationId: 1
    },
    {
      feedback_name: "No Error",
      createdAt: new Date(),
      updatedAt: new Date()
      // ClientId: 1,
      // LocationId: 1
    },
    {
      feedback_name: "Other",
      createdAt: new Date(),
      updatedAt: new Date()
      // ClientId: 1,
      // LocationId: 1
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
    await queryInterface.bulkDelete('PrimDiagFeedbacks', null, {});
  }
};
