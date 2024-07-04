import { StatusCodes } from 'http-status-codes';

export const ERROR = {
  400: {
    status: StatusCodes.BAD_REQUEST,
    message: 'Bad Request',
  },
  500: {
    status: StatusCodes.INTERNAL_SERVER_ERROR,
    message: 'Server Error',
  },
  404: (model, modelQuery, modelQueryId) => {
    const error = {
      status: StatusCodes.NOT_FOUND,
      message:
        model + ' with ' + modelQuery + ' id ' + modelQueryId + ' not found',
    };
    return error;
  },
};

export const OK = {
  status: StatusCodes.OK,
  message: 'Action Completed',
};
