'use strict'

module.exports.rest = {

  createResponse: (code, success, response, errorDescription) => {
    const newResponse = {
      meta: {
        code: code,
        success: success,
        errorDescription: errorDescription
      },
      response: response
    }   

    return newResponse
  }  
}
