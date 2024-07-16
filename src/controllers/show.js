import * as showServices from '../services/show.js';
import { API_STATUS } from '../models/apiStatus.js';

export async function deactivate(req, res) {
  try {
    await showServices.deactivate(req.params.showId);
    res.status(API_STATUS.OK.status);
    res.send(API_STATUS.OK);
  } catch (error) {
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}
