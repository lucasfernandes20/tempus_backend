/* eslint-disable no-unused-vars */
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('clients', [
      {
        nome: 'Lucas Fernandes',
        CPF: '47032075835',
        birthDate: '2000-08-25',
        familyIncome: 3500
      },
      {
        nome: 'Daniel Cuca',
        CPF: '1234567891',
        birthDate: '1945-05-21',
        familyIncome: 4700
      },
      {
        nome: 'Gabiel Dresdi',
        CPF: '9876543219',
        birthDate: '1998-09-17',
        familyIncome: 9800
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};