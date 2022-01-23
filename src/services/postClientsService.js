const {client} = require('../../models')

const postClientsService = async (newClient) => {
  const postClient = await client.create({newClient})
  return postClient
}

module.exports = postClientsService