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
    await queryInterface.bulkInsert('AuditOptions', [{
      audit_opt: "PET Scan",
      ClientId: 1,
      LocationId: 1
    },
    {
      audit_opt: "Mammo Chart",
      ClientId: 1,
      LocationId: 1
    },
    {
      audit_opt: "I&I",
      ClientId: 1,
      LocationId: 1
    },
    {
      audit_opt: "None",
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
    await queryInterface.bulkDelete('AuditOptions', null, {});
  }
};
