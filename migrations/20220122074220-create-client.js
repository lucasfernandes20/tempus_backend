/* eslint-disable no-unused-vars */
const moment = require('moment')
const ApiError = require('../src/Error/ApiError')
const {conflict} = ApiError

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
      nome: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },
      CPF: {
        type: Sequelize.STRING(11),
        allowNull: false,
        unique: true
      },
      birthDate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATEONLY,
        field: 'registerDate',
        defaultValue: new Date()
      },
      familyIncome: {
        type: Sequelize.DECIMAL,
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