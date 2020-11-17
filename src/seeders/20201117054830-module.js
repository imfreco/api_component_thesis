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
    await queryInterface.bulkInsert('Modules', [
      { name: 'average', createdAt: new Date(), updatedAt: new Date() },
      { name: 'sisben', createdAt: new Date(), updatedAt: new Date() },
      { name: 'population', createdAt: new Date(), updatedAt: new Date() },
      { name: 'inscription', createdAt: new Date(), updatedAt: new Date() },
      { name: 'component', createdAt: new Date(), updatedAt: new Date() },
      { name: 'menu', createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Modules', null, {});
  },
};
