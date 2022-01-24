const { NO_CONTENT } = require("http-status-codes/build/cjs/legacy")
const {deleteClientsService} = require('../services')

const deleteClients = async ( req, res) => {
  const {id} = req.params;

  await deleteClientsService(id)
  res.status(NO_CONTENT).end()
}
module.exports = deleteClients