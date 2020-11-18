const { hashSync } = require('bcrypt');

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
        hashpass: hashSync('FRED20', 1),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        email: 'jduran@education.co',
        lengthpass: 6,
        hashpass: hashSync('JESU20', 1),
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
