const clientRoute = require('express').Router({mergeParams: true})
const rescue = require('express-rescue')
const {postClients, getClients, updateClients, deleteClients, getClientsById} = require('../controllers')


clientRoute.post('/user', rescue(postClients))

clientRoute.get('/user', rescue(getClients))

clientRoute.put('/user/:id', rescue(updateClients))

clientRoute.delete('/user/:id', rescue(deleteClients))

clientRoute.get('/user/:id', rescue(getClientsById))

module.exports = clientRoute