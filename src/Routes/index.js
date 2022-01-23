const mainRoute = require('express').Router({mergeParams: true})
const rescue = require('express-rescue')
const {postClients} = require('../controllers')

mainRoute.post('/user', rescue(postClients))

module.exports = mainRoute