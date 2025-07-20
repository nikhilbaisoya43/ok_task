'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Roles', [{
      role_name: "Manager",
      LocationId: 1,
      ClientId: 1
    },
    {
      role_name: "Team Lead",
      LocationId: 1,
      ClientId: 1
    },
    {
      role_name: "Coder",
      LocationId: 1,
      ClientId: 1
    },
    {
      role_name: "Auditor",
      LocationId: 1,
      ClientId: 1
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
    await queryInterface.bulkDelete('Roles', null, {});
  }
};
