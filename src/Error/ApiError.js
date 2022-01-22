const { BAD_REQUEST, NOT_FOUND, UNAUTHORIZED, CONFLICT } = require('http-status-codes');

class ApiError {
  constructor(message, code) {
    this.message = message
    this.code = code
  }

  static badRequest(message) {
    throw new ApiError(message, BAD_REQUEST);
  }

  static notFound(message) {
    throw new ApiError(message, NOT_FOUND);
  }

  static unauthorized(message) {
    throw new ApiError(message, UNAUTHORIZED);
  }

  static conflict(message) {
    throw new ApiError(message, CONFLICT);
  }
}

module.exports = ApiError