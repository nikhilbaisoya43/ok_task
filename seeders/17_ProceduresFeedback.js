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
    await queryInterface.bulkInsert('ProceduresFeedbacks', [{
      feedback_name: "Incorrect procedure",
      ClientId: 1,
      LocationId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      feedback_name: "Missed Procedure",
      ClientId: 1,
      LocationId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      feedback_name: "Units",
      ClientId: 1,
      LocationId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      feedback_name: "Administration Code",
      ClientId: 1,
      LocationId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      feedback_name: "Drug Code",
      ClientId: 1,
      LocationId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      feedback_name: "Code Category",
      ClientId: 1,
      LocationId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      feedback_name: "Missing Report",
      ClientId: 1,
      LocationId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      feedback_name: "Client Guideline not followed",
      ClientId: 1,
      LocationId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      feedback_name: "Other",
      ClientId: 1,
      LocationId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      feedback_name: "Medical Necessity Edit",
      ClientId: 1,
      LocationId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
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
    await queryInterface.bulkDelete('ProceduresFeedbacks', null, {});
  }
};
