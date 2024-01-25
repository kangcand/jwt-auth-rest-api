'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const pasiens = [];
    for (let i = 0; i < 5; i++) {
      pasiens.push({
        nama: `pasien${i}`,
        jenis_kelamin: `laki-laki`,
        no_telepon: `0876787667898`,
        alamat: 'alamat pasien',
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    return queryInterface.bulkInsert('Pasiens', pasiens, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Pasiens', null, {
      truncate: true
    });
  }
};
