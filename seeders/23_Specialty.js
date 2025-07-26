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
    await queryInterface.bulkInsert('Specialties', [

      // * Location 1
      {
        spec_name: "Ambulatory Surgery",
        ClientId: 1,
        LocationId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spec_name: "Ancillary",
        ClientId: 1,
        LocationId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spec_name: "Edits",
        ClientId: 1,
        LocationId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spec_name: "Analysis",
        ClientId: 1,
        LocationId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spec_name: "Inpatient",
        ClientId: 1,
        LocationId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spec_name: "Clinic",
        ClientId: 1,
        LocationId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spec_name: "ED",
        ClientId: 1,
        LocationId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // * Location 2
      {
        spec_name: "Clinical",
        ClientId: 1,
        LocationId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spec_name: "Clinical EO",
        ClientId: 1,
        LocationId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spec_name: "Clinical EO Self Pay",
        ClientId: 1,
        LocationId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spec_name: "Recurring EO",
        ClientId: 1,
        LocationId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spec_name: "Same Day Centre",
        ClientId: 1,
        LocationId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spec_name: "Observation",
        ClientId: 1,
        LocationId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spec_name: "Inpatient",
        ClientId: 1,
        LocationId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // * Location 3
      {
        spec_name: "Clinic",
        ClientId: 1,
        LocationId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spec_name: "Emergency Department",
        ClientId: 1,
        LocationId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spec_name: "Same Day Center",
        ClientId: 1,
        LocationId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spec_name: "Observation",
        ClientId: 1,
        LocationId: 3,
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
    await queryInterface.bulkDelete('Specialties', null, {});
  }
};
