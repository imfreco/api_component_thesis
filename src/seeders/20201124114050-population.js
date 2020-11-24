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
    await queryInterface.bulkInsert('Populations', [
      {
        value: 'Víctima del conflicto',
        description: 'conflicto armado',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        value: 'Grupo étnico',
        description: 'comunidad',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        value: 'Madre cabeza de hogar',
        description: 'estudiante mujer con hijo',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        value: 'Desplazado',
        description: 'victima de desplazamiento',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        value: 'Ninguna',
        description: 'no pertenece a ninguna',
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
    await queryInterface.bulkDelete('Populations', null, {});
  },
};
