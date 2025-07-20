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
    await queryInterface.bulkInsert('QCStatuses', [{
      qc_status_name: "Agree",
      LocationId: 1,
      // createdAt: new Date() ,updatedAt: new Date() ,
      ClientId: 1
    },
    {
      qc_status_name: "Feedback",
      LocationId: 1,
      // createdAt: new Date() ,updatedAt: new Date() ,
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
    await queryInterface.bulkDelete('QCStatuses', null, {});
  }
};
