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
    await queryInterface.bulkInsert('Processes', [{
      proc_name: "Coding",
      ClientId: 1,
      createdAt: new Date() ,updatedAt: new Date() ,      
      LocationId: 1
    },
    {
      proc_name: "Edits & Analytics",
      ClientId: 1,createdAt: new Date() ,updatedAt: new Date() ,
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
    await queryInterface.bulkDelete('Processes', null, {});
  }
};
