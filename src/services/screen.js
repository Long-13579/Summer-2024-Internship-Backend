import * as screen from '../repositories/screen.js';
import * as showServices from './show.js';

export async function add(seatMatrix, cinemaId) {
  await screen.add(seatMatrix, cinemaId);
}

export async function inactive(id) {
  const showsByScreenIdInfor = await showServices.getByScreenId(id);
  const showsByScreenIdArrId = showsByScreenIdInfor.map((index) => index.id);
  await showServices.inactive(showsByScreenIdArrId);
  await screen.inactive(id);
}

export async function update({ id, seatMatrix, cinemaId }) {
  await screen.update({ id, seatMatrix, cinemaId });
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
