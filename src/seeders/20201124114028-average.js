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
    await queryInterface.bulkInsert('Averages', [
      {
        value: '2,5 a 2,9',
        description: 'bajo',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        value: '3,0 a 3,9',
        description: 'aceptable',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        value: '4,0 a 4,49',
        description: 'excelente',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        value: '4,5 a 5,0',
        description: 'meritorio',
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
    await queryInterface.bulkDelete('Averages', null, {});
  },
};
