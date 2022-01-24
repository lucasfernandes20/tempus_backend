const { OK } = require("http-status-codes")
const {getClientsByIdService} = require('../services')

const getClientsById = async (req, res) => {
  const {id} = req.params

  const client = await getClientsByIdService(id)

  return res.status(OK).json(client)
}

module.exports = getClientsById