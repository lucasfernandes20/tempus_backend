const { CREATED } = require("http-status-codes")
const {postClientsService} = require("../services")

const postClients = async (req, res) => {
  const {body} = req

  const newClient = await postClientsService(body)
  
  return res.status(CREATED).json(newClient)
}

module.exports = postClients