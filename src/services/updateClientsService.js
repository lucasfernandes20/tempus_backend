const {client} = require('../../models')
const ApiError = require('../Error/ApiError')
const { badRequest } = ApiError
const { validateClient } = require('../validations')

const updateClientsService = async (id, body) => {
  const error = validateClient(body)

  if(error) return badRequest(error)

  await client.update({...body},{where: {id: id}})

  const updatedClient = await client.findByPk(id)

  return updatedClient
}

module.exports = updateClientsService