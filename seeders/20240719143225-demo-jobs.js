'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Jobs', [
      { title: 'Job 1', description: 'Description for job 1', status: 'pending', createdAt: new Date(), updatedAt: new Date() },
      { title: 'Job 2', description: 'Description for job 2', status: 'pending', createdAt: new Date(), updatedAt: new Date() },
      { title: 'Job 3', description: 'Description for job 3', status: 'pending', createdAt: new Date(), updatedAt: new Date() },
      { title: 'Job 4', description: 'Description for job 4', status: 'pending', createdAt: new Date(), updatedAt: new Date() },
      { title: 'Job 5', description: 'Description for job 5', status: 'pending', createdAt: new Date(), updatedAt: new Date() },
      { title: 'Job 6', description: 'Description for job 6', status: 'pending', createdAt: new Date(), updatedAt: new Date() },
      { title: 'Job 7', description: 'Description for job 7', status: 'pending', createdAt: new Date(), updatedAt: new Date() },
      { title: 'Job 8', description: 'Description for job 8', status: 'pending', createdAt: new Date(), updatedAt: new Date() },
      { title: 'Job 9', description: 'Description for job 9', status: 'pending', createdAt: new Date(), updatedAt: new Date() },
      { title: 'Job 10', description: 'Description for job 10', status: 'pending', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Jobs', null, {});
  }
};
