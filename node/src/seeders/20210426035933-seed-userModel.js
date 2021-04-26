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
      name: 'Snoop',
      email: 'snoopydog@dogpound.com',
      password: 'sad1fa324',
      genbikehash: 'dGkt64mq9yM4kkh5',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    }, {
      name: 'asd',
      email: 'snoopydog@dogpound.com',
      password: 'sad1fa324',
      genbikehash: 'dGkt64mq9yM4kkh5',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    }, {
      name: 'Sngadfoop',
      email: 'snoopydog@dogpound.com',
      password: 'sad1fa324',
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
