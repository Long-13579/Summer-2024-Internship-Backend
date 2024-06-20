import { StatusCodes } from 'http-status-codes';

export const API_STATUS = {
  BAD_REQUEST: {
    status: StatusCodes.BAD_REQUEST,
    message: 'Bad Request',
  },
  INTERNAL_SERVER_ERROR: {
    status: StatusCodes.INTERNAL_SERVER_ERROR,
    message: 'Server Error',
  },
  OK: {
    status: StatusCodes.OK,
    message: 'Action Completed',
  },
  NOT_FOUND: {
    status: StatusCodes.NOT_FOUND,
    getErrorMessage(model, modelQuery, modelQueryId) {
      const error = {
        status: StatusCodes.NOT_FOUND,
        message:
          model + ' with ' + modelQuery + ' id ' + modelQueryId + ' not found',
      };
      return error;
    },
  },
};
