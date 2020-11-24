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
    await queryInterface.bulkInsert('Sisbens', [
      {
        value: '0 a 17,19',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        value: '17,20 a 34,38',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        value: '34,38 a 51,57',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        value: '51,58 a 100',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Sisbens', null, {});
  },
};
