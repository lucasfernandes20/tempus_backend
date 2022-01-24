const { OK } = require("http-status-codes")
const { updateClientsService } = require("../services")

const updateClients = async (req, res) => {
  const {id} = req.params;
  const {body} = req;

  const updatedClient = await updateClientsService(id, body)

  return res.status(OK).json(updatedClient)
}

module.exports = updateClients