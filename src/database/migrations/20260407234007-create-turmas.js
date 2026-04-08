'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('turmas', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },

      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      turno: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      sala_id: {
        type: Sequelize.INTEGER,
        allowNull: true,

        references: {
          model: 'salas',
          key: 'id',
        },

        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('turmas');
  },
};