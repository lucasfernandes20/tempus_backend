const {client} = require('../../models')

const deleteClientsService = async (id) => {
const deletedUser = await client.destroy({where: {id: id}})

return deletedUser
}

module.exports = deleteClientsService