const postClientsService = require('./postClientsService')
const getClientsService = require('./getClientsService')
const updateClientsService = require('./updateClientsService')
const deleteClientsService = require('./deleteClientsService')
const getClientsByIdService = require('./getClientsByIdService')

module.exports = {
  postClientsService,
  getClientsService,
  updateClientsService,
  deleteClientsService,
  getClientsByIdService
}