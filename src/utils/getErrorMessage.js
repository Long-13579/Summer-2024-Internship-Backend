import { StatusCodes } from 'http-status-codes';
export const getNotFoundErrorMessage = ({
  model,
  modelQuery,
  modelQueryId,
}) => {
  const error = {
    status: StatusCodes.NOT_FOUND,
    message:
      model + ' with ' + modelQuery + ' id ' + modelQueryId + ' not found',
  };
  return error;
};
