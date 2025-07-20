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
    const dateToday = new Date();
    await queryInterface.bulkInsert('WorklistStatuses', [{
      name: "Open",
      createdAt: dateToday,
      updatedAt: dateToday
    },
    {
      name: "In Progress",
      createdAt: dateToday,
      updatedAt: dateToday
    },
    {
      name: "Closed",
      createdAt: dateToday,
      updatedAt: dateToday
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
    await queryInterface.bulkDelete('WorklistStatuses', null, {});
  }
};
