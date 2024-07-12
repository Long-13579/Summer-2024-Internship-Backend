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
  NO_CONTENT: {
    status: StatusCodes.NO_CONTENT,
    message: 'Empty Data',
  },
};
