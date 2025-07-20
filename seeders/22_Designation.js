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
     * 
    */
    await queryInterface.bulkInsert('Designations', [
      {
        name: "Medical Coder",
        ClientId: 1,
        LocationId: 1
      },
      {
        name: "QA",
        ClientId: 1,
        LocationId: 1
      },
      {
        name: "Asst. Manager",
        ClientId: 1,
        LocationId: 1
      },
      {
        name: "Team Lead",
        ClientId: 1,
        LocationId: 1
      },
      {
        name: "Sr. Manager",
        ClientId: 1,
        LocationId: 1
      },
      {
        name: "Manager",
        ClientId: 1,
        LocationId: 1
      },
      {
        name: "VP",
        ClientId: 1,
        LocationId: 1
      },
      {
        name: "CEO",
        ClientId: 1,
        LocationId: 1
      },
      {
        name: "Senior coder",
        ClientId: 1,
        LocationId: 1
      },
      {
        name: "Medical Coder",
        ClientId: 1,
        LocationId: 1
      },
      {
        name: "Senior Quality Analyst",
        ClientId: 1,
        LocationId: 1
      },
      {
        name: "Assistant Manager",
        ClientId: 1,
        LocationId: 1
      }
    ]
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Designations', null, {});
  }
};
