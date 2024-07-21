import * as screen from '../repositories/screen.js';
import * as seatMatrixServices from '../services/seatMatrix.js';
import * as showServices from './show.js';

export async function add(cinemaId, name, width, len) {
  const seatMatrixData = seatMatrixServices.add(width, len);
  await screen.add(seatMatrixData, cinemaId, name, width, len);
}

export async function inactive(id) {
  const showsByScreenIdInfor = await showServices.getByScreenId(id);
  const showsByScreenIdArrId = showsByScreenIdInfor.map((index) => index.id);
  await showServices.inactive(showsByScreenIdArrId);
  await screen.inactive(id);
}

export async function update(id, cinemaId, name, width, len) {
  const seatMatrix = seatMatrixServices.add(width, len);
  await screen.update(id, seatMatrix, cinemaId, name, width, len);
}

export async function updateSeatMatrix(id, seatMatrixData) {
  await screen.update(id, seatMatrixData);
}

export async function getAll() {
  const allScreenInfor = await screen.getAll();
  return allScreenInfor;
}

export async function getByCinemaId(cinemaId) {
  const screenByCinemaIdInfor = await screen.getByCinemaId(cinemaId);
  return screenByCinemaIdInfor;
}

export async function getById(id) {
  const screenByIdInfor = await screen.getById(id);
  return screenByIdInfor;
}

export async function getScreen(params) {
  if (params.id) {
    return await getById(params.id);
  }
  if (params.cinemaId) {
    return await getByCinemaId(params.cinemaId);
  }
  return await getAll();
}
