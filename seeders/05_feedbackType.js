'use strict';

const { date } = require('joi');
const { create } = require('../app/models/client');

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
    await queryInterface.bulkInsert('FeedbackTypes', [{
      feed_type_name: "Critical",
      LocationId: 1,
      ClientId: 1,
      createdAt: new Date() ,updatedAt: new Date()   },
    {
      feed_type_name: "Non-Critical",
      LocationId: 1,
      ClientId: 1,
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
    await queryInterface.bulkDelete('FeedbackTypes', null, {});
  }
};
