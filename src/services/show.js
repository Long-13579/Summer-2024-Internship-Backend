import * as show from '../repositories/show.js';
import * as seatMatrix from '../repositories/seatMatrix.js';
import * as screenServices from './screen.js';
import * as screen from '../repositories/screen.js';
import { changeCinemasToListShowDto } from '../utils/filmDetailDTO.js';
import { changeAllShowToDTO } from '../utils/showDTO.js';
import { seat } from '../constants/seatMetrics.js';

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

export async function deactivate(id) {
  await show.deactivate(id);
}

export async function getAll() {
  const allShowInfor = await show.getAll();
  const allShowDTO = changeAllShowToDTO(allShowInfor);
  return allShowDTO;
}

export async function getById(id) {
  const showByIdInfor = await show.getById(id);
  return showByIdInfor;
}

export async function getByFilmIdAdmin(filmId) {
  const showByFilmIdInfor = await show.getByFilmIdAdmin(filmId);
  return showByFilmIdInfor;
}

export async function getByFilmIdDateStartProvinceCityId({
  filmId,
  dateStart,
  provinceCityId,
}) {
  const showByFilmIdInfor = await show.getByFilmIdDateStartProvinceCityId({
    filmId,
    dateStart,
    provinceCityId,
  });
  const showByFilmIdDTO = changeCinemasToListShowDto(showByFilmIdInfor);
  return showByFilmIdDTO;
}

export async function getByCinemaScreenDateStart({
  cinemaId,
  screenId,
  dateStart,
}) {
  const showsInfor = await show.getByCinemaScreenDateStart({
    cinemaId,
    screenId,
    dateStart,
  });
  return showsInfor;
}

export async function getShowForAdmin({
  showId,
  filmId,
  screenId,
  cinemaId,
  dateStart,
}) {
  if (showId) {
    return await getById(showId);
  }
  if (screenId || cinemaId || dateStart) {
    return await getByCinemaScreenDateStart({ screenId, cinemaId, dateStart });
  }
  if (filmId) {
    return await getByFilmId(filmId);
  }
  return await getAll();
}

export async function getShowForUser({ id }) {
  if (id) {
    return await getById(id);
  }
  return getAll();
}
