/* eslint-disable no-unused-vars */
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const client = sequelize.define(
    'client',
    {
      name: DataTypes.STRING,
      CPF: DataTypes.STRING,
      birthDate: DataTypes.DATEONLY,
      registerDate: DataTypes.DATEONLY,
      familyIncome: DataTypes.DECIMAL
    },
    {
      createdAt: 'registerDate'
    }
  )
  return client;
};