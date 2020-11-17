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
    await queryInterface.bulkInsert('Scopes', [
      {
        moduleId: 1,
        methodId: 1,
        fullAccess: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        moduleId: 2,
        methodId: 1,
        fullAccess: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        moduleId: 3,
        methodId: 1,
        fullAccess: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        moduleId: 4,
        methodId: 1,
        fullAccess: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        moduleId: 4,
        methodId: 1,
        fullAccess: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        moduleId: 4,
        methodId: 2,
        fullAccess: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        moduleId: 4,
        methodId: 4,
        fullAccess: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        moduleId: 4,
        methodId: 5,
        fullAccess: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        moduleId: 5,
        methodId: 1,
        fullAccess: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        moduleId: 5,
        methodId: 2,
        fullAccess: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        moduleId: 6,
        methodId: 2,
        fullAccess: false,
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
    await queryInterface.bulkDelete('Scopes', null, {});
  },
};
