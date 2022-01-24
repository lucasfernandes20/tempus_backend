const {client} = require('../../models')
const {validateClient} = require('../validations')
const ApiError = require('../Error/ApiError')
const {badRequest} = ApiError

const postClientsService = async (newClient) => {
  const error = validateClient(newClient)

  if(error) return badRequest(error)

  const postClient = await client.create({...newClient})
  
  return postClient
}

module.exports = postClientsService