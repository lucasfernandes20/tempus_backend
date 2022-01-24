const {client} = require('../../models')
const ApiError = require('../Error/ApiError')
const { notFound } = ApiError

const getClientsByIdService = async (id) => {
  const targetClient = await client.findByPk(id)

  if(!targetClient) notFound('"Id" not found')

  return targetClient
}

module.exports = getClientsByIdService