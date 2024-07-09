import * as show from '../repositories/show.js';
import * as screen from '../repositories/screen.js';
import { changeCinemasToListShowDto } from '../utils/filmDetailDTO.js';

export async function add(filmId, screenId, timeStart, dateStart, price) {
  const screenByIdInfor = await screen.getById(screenId);
  const seatMatrixData = screenByIdInfor.seatMatrix;
  await show.add(filmId, screenId, timeStart, dateStart, price, seatMatrixData);
}

export async function update(
  id,
  filmId,
  screenId,
  timeStart,
  dateStart,
  price
) {
  await show.update(id, filmId, screenId, timeStart, dateStart, price);
}

export async function getAll() {
  const allShowInfor = await show.getAll();
  return allShowInfor;
}

export async function getById(id) {
  const showByIdInfor = await show.getById(id);
  return showByIdInfor;
}

export async function getByFilmIdAdmin(filmId) {
  const showByFilmIdInfor = await show.getByFilmIdAdmin(filmId);
  return showByFilmIdInfor;
}

export async function getByScreenId(screenId) {
  const showByScreenIdInfor = await show.getByScreenId(screenId);
  return showByScreenIdInfor;
}

export async function getByFilmIdFilmDetail(filmId, date, provinceCityId) {
  const showByFilmIdInfor = await show.getByFilmIdFilmDetail(
    filmId,
    date,
    provinceCityId
  );
  const showByFilmIdDTO = changeCinemasToListShowDto(showByFilmIdInfor);
  return showByFilmIdDTO;
}

export async function getByCinemaId(cinemaId) {
  const showByCinemaIdInfor = await show.getByCinemaId(cinemaId);
  return showByCinemaIdInfor;
}

export async function applyShowSeatPrice(showId) {
  const showByIdInfor = await show.getById(showId);
  const seatMatrixData = showByIdInfor.seatMatrix;
}
