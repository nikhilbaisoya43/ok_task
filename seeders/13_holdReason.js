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
    await queryInterface.bulkInsert('HoldReasons', [{
      hold_reason: "Data processing",
      createdAt: new Date(),
      updatedAt: new Date(),
      ClientId: 1,
      // LocationId: 1
    },
    {
      hold_reason: "Manager Review",
      createdAt: new Date(),
      updatedAt: new Date(),
      ClientId: 1,
      // LocationId: 1
    },
    {
      hold_reason: "Missing Charges - E/M Facility (Charges: E/M Facility)",
      createdAt: new Date(),
      updatedAt: new Date(),
      ClientId: 1,
      // LocationId: 1
    },
    {
      hold_reason: "Missing Charges - E/M Provider (Charges: E/M Provider)",
      createdAt: new Date(),
      updatedAt: new Date(),
      ClientId: 1,
      // LocationId: 1
    },
    {
      hold_reason: "Missing Charges - Imaging",
      createdAt: new Date(),
      updatedAt: new Date(),
      ClientId: 1,
      // LocationId: 1
    },
    {
      hold_reason: "Missing Charges - Lab",
      createdAt: new Date(),
      updatedAt: new Date(),
      ClientId: 1,
      // LocationId: 1
    },
    {
      hold_reason: "Missing Charges - OR/Procedure",
      createdAt: new Date(),
      updatedAt: new Date(),
      ClientId: 1,
      // LocationId: 1
    },
    {
      hold_reason: "Missing Charges - Path",
      createdAt: new Date(),
      updatedAt: new Date(),
      ClientId: 1,
      // LocationId: 1
    },
    {
      hold_reason: "Missing Charges - Pharmacy",
      createdAt: new Date(),
      updatedAt: new Date(),
      ClientId: 1,
      // LocationId: 1
    },
    {
      hold_reason: "Missing Charges - Other",
      createdAt: new Date(),
      updatedAt: new Date(),
      ClientId: 1,
      // LocationId: 1
    },
    {
      hold_reason: "Missing Documentation - H&P (Documentation: H&P)",
      createdAt: new Date(),
      updatedAt: new Date(),
      ClientId: 1,
      // LocationId: 1
    },
    {
      hold_reason: "Missing Documentation - ED Note",
      createdAt: new Date(),
      updatedAt: new Date(),
      ClientId: 1,
      // LocationId: 1
    },
    {
      hold_reason: "Missing Documentation - Imaging",
      createdAt: new Date(),
      updatedAt: new Date(),
      ClientId: 1,
      // LocationId: 1
    },
    {
      hold_reason: "Missing Documentation - Lab",
      createdAt: new Date(),
      updatedAt: new Date(),
      ClientId: 1,
      // LocationId: 1
    },
    {
      hold_reason: "Missing Documentation - Nursing",
      createdAt: new Date(),
      updatedAt: new Date(),
      ClientId: 1,
      // LocationId: 1
    },
    {
      hold_reason: "Missing Documentation - OR/Procedure",
      createdAt: new Date(),
      updatedAt: new Date(),
      ClientId: 1,
      // LocationId: 1
    },
    {
      hold_reason: "Missing Documentation - Path",
      createdAt: new Date(),
      updatedAt: new Date(),
      ClientId: 1,
      // LocationId: 1
    },
    {
      hold_reason: "Missing Documentation - Provider order",
      createdAt: new Date(),
      updatedAt: new Date(),
      ClientId: 1,
      // LocationId: 1
    },
    {
      hold_reason: "Missing Documentation - HPI/ROS/Physical Exam",
      createdAt: new Date(),
      updatedAt: new Date(),
      ClientId: 1,
      // LocationId: 1
    },
    {
      hold_reason: "Missing Documentation - Other",
      createdAt: new Date(),
      updatedAt: new Date(),
      ClientId: 1,
      // LocationId: 1
    },
    {
      hold_reason: "Queries",
      createdAt: new Date(),
      updatedAt: new Date(),
      ClientId: 1,
      // LocationId: 1
    },
    {
      hold_reason: "Other",
      createdAt: new Date(),
      updatedAt: new Date(),
      ClientId: 1,
      // LocationId: 1
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
    await queryInterface.bulkDelete('HoldReasons', null, {});
  }
};
