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
      ClientId: 1,
      LocationId: 1
    },
    {
      hold_reason: "Manager Review",
      ClientId: 1,
      LocationId: 1
    },
    {
      hold_reason: "Missing Charges - E/M Facility (Charges: E/M Facility)",
      ClientId: 1,
      LocationId: 1
    },
    {
      hold_reason: "Missing Charges - E/M Provider (Charges: E/M Provider)",
      ClientId: 1,
      LocationId: 1
    },
    {
      hold_reason: "Missing Charges - Imaging",
      ClientId: 1,
      LocationId: 1
    },
    {
      hold_reason: "Missing Charges - Lab",
      ClientId: 1,
      LocationId: 1
    },
    {
      hold_reason: "Missing Charges - OR/Procedure",
      ClientId: 1,
      LocationId: 1
    },
    {
      hold_reason: "Missing Charges - Path",
      ClientId: 1,
      LocationId: 1
    },
    {
      hold_reason: "Missing Charges - Pharmacy",
      ClientId: 1,
      LocationId: 1
    },
    {
      hold_reason: "Missing Charges - Other",
      ClientId: 1,
      LocationId: 1
    },
    {
      hold_reason: "Missing Documentation - H&P (Documentation: H&P)",
      ClientId: 1,
      LocationId: 1
    },
    {
      hold_reason: "Missing Documentation - ED Note",
      ClientId: 1,
      LocationId: 1
    },
    {
      hold_reason: "Missing Documentation - Imaging",
      ClientId: 1,
      LocationId: 1
    },
    {
      hold_reason: "Missing Documentation - Lab",
      ClientId: 1,
      LocationId: 1
    },
    {
      hold_reason: "Missing Documentation - Nursing",
      ClientId: 1,
      LocationId: 1
    },
    {
      hold_reason: "Missing Documentation - OR/Procedure",
      ClientId: 1,
      LocationId: 1
    },
    {
      hold_reason: "Missing Documentation - Path",
      ClientId: 1,
      LocationId: 1
    },
    {
      hold_reason: "Missing Documentation - Provider order",
      ClientId: 1,
      LocationId: 1
    },
    {
      hold_reason: "Missing Documentation - HPI/ROS/Physical Exam",
      ClientId: 1,
      LocationId: 1
    },
    {
      hold_reason: "Missing Documentation - Other",
      ClientId: 1,
      LocationId: 1
    },
    {
      hold_reason: "Queries",
      ClientId: 1,
      LocationId: 1
    },
    {
      hold_reason: "Other",
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
    await queryInterface.bulkDelete('HoldReasons', null, {});
  }
};
