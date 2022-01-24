const {client} = require('../../models')

const getClientsService = async () => {
  const clients = await client.findAll();

  return clients
}

module.exports = getClientsService