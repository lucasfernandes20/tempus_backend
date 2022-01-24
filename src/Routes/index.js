const mainRoute = require('express').Router({mergeParams: true})
const error = require('../middlewares/error')
const clientRoute = require('./clientRoute')

mainRoute.use(clientRoute)

mainRoute.use(error)

module.exports = mainRoute