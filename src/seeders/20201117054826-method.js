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
    await queryInterface.bulkInsert('Methods', [
      { name: 'get', createdAt: new Date(), updatedAt: new Date() },
      { name: 'post', createdAt: new Date(), updatedAt: new Date() },
      { name: 'put', createdAt: new Date(), updatedAt: new Date() },
      { name: 'patch', createdAt: new Date(), updatedAt: new Date() },
      { name: 'delete', createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Methods', null, {});
  },
};
