'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     return queryInterface.bulkInsert('userModels', [{
      name: 'Jones',
      email: 'jones@gmail.com',
      password: 'saad1a324',
      genbikehash: 'dGkt64mq9yM4kkh5',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    }, {
      name: 'Azalea',
      email: 'azalea@gmail.com',
      password: 'sa3251a324',
      genbikehash: 'dGkt64mq9yM4kkh5',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    }, {
      name: 'Ganifar',
      email: 'ganifar@gmail.com',
      password: 'sad3461gasa324',
      genbikehash: 'dGkt64mq9yM4kkh5',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('userModels', null, {});
  }
};
