import * as showServices from '../services/show.js';
import { API_STATUS } from '../models/apiStatus.js';

export async function getShowForAdmin(req, res) {
  try {
    const showInfor = await showServices.getShowForAdmin(req.query);
    res.status(API_STATUS.OK.status);
    res.send(showInfor);
  } catch (error) {
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}
