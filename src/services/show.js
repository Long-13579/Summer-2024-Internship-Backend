import * as show from '../repositories/show.js';
import * as seatMatrix from '../repositories/seatMatrix.js';
import * as screenServices from './screen.js';

export async function add({ filmId, screenId, timeStart, dateStart, price }) {
  const screenByIdInfor = await screenServices.getById(screenId);
  const seatMatrixByScreenId = screenByIdInfor.seatMatrix;
  const seatMatrixPriceApplied = seatMatrix.applyPriceToSeatMatrix(
    seatMatrixByScreenId,
    price
  );
  await show.add({
    filmId,
    screenId,
    timeStart,
    dateStart,
    price,
    seatMatrix: seatMatrixPriceApplied,
  });
}

export async function update({
  id,
  filmId,
  screenId,
  timeStart,
  dateStart,
  price,
  seatMatrix,
}) {
  await show.update({
    id,
    filmId,
    screenId,
    timeStart,
    dateStart,
    price,
    seatMatrix,
  });
}

export async function inactive(id) {
  await show.inactive(id);
}

export async function getAll() {
  const allShowInfor = await show.getAll();
  return allShowInfor;
}

export async function getById(id) {
  const showByIdInfor = await show.getById(id);
  return showByIdInfor;
}

export async function getByFilmId(filmId) {
  const showByFilmIdInfor = await show.getByFilmId(filmId);
  return showByFilmIdInfor;
}

export async function getByScreenId(screenId) {
  const showByScreenIdInfor = await show.getByScreenId(screenId);
  return showByScreenIdInfor;
}

export async function getByCinemaId(cinemaId) {
  const showByCinemaIdInfor = await show.getByCinemaId(cinemaId);
  return showByCinemaIdInfor;
}
