/* eslint-disable no-unused-vars */
'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('clients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(150),
      },
      CPF: {
        type: Sequelize.STRING(11),
        unique: true
      },
      birthDate: {
        type: Sequelize.DATEONLY,
      },
      createdAt: {
        type: Sequelize.DATEONLY,
        field: 'registerDate',
        defaultValue: new Date()
      },
      familyIncome: {
        type: Sequelize.DECIMAL(20, 2),
        validate: {
          min: 0
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('clients');
  }
};