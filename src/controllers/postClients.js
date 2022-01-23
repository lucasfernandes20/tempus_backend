const { CREATED } = require("http-status-codes")
const {postClientsService} = require("../services")

const postClients = async (req, res) => {
  const client = req.body

  const newClient = await postClientsService(client)
  
  return res.status(CREATED).json(newClient)
}

module.exports = postClients