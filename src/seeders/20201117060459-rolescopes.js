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
    await queryInterface.bulkInsert('RoleScopes', [
      {
        roleId: 1,
        scopeId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: 1,
        scopeId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: 1,
        scopeId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: 1,
        scopeId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: 1,
        scopeId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: 1,
        scopeId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: 2,
        scopeId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: 2,
        scopeId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: 2,
        scopeId: 11,
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
    await queryInterface.bulkDelete('RoleScopes', null, {});
  },
};
