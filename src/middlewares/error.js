/* eslint-disable no-unused-vars */
const ApiError = require('../Error/ApiError')

module.exports = async (err, req, res, next) => {
  if(err instanceof ApiError) {
    return res.status(err.code).json(err.message)
  }
  return res.status(500).json({message: 'Internal error!'})
}