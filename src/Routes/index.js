const mainRoute = require('express').Router({mergeParams: true})
const rescue = require('express-rescue')

mainRoute.get('/', rescue(async (req, res) => {
  console.log('oi')
  res.status(200).json({message: 'abriu o servidor amigo'})
}))

module.exports = mainRoute