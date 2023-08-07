// http-status-codes Provides various  status codes
const { StatusCodes } = require("http-status-codes");

class ServiceError extends Error {
  //   message , explanation  , status codes will come be passed
  //   to this while object creation
  constructor(
    message = "Something Went Wrong",
    explanation = "Service layer error",
    StatusCode = StatusCodes.INTERNAL_SERVER_ERROR //setting defaults if not received any status codes
  ) {
    super();
    this.name = "ServiceError";
    this.message = message;
    this.explanation = explanation;
    this.StatusCodes = StatusCode;
  }
}

module.exports = ServiceError;
