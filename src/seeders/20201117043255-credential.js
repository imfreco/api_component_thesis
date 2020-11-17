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
    await queryInterface.bulkInsert('Credentials', [
      {
        userId: 1,
        email: 'frcortes@education.co',
        lengthpass: 6,
        hashpass: 'FRED20',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        email: 'jduran@education.co',
        lengthpass: 6,
        hashpass: 'JESU20',
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
    await queryInterface.bulkDelete('Credentials', null, {});
  },
};
