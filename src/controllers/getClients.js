const { OK } = require("http-status-codes/build/cjs/legacy")
const {getClientsService} = require('../services')

const getClients = async (req, res) => {
  const clients = await getClientsService()
  return res.status(OK).json(clients)
}

module.exports = getClients