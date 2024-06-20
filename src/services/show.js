import * as show from '../repositories/show.js';
import * as screen from './screen.js';
import { changeCinemasToListShowDto } from '../utils/filmDetailDTO.js';

export async function add(
  filmId,
  screenId,
  timeStart,
  dateStart,
  price,
  seatMatrix
) {
  await show.add(filmId, screenId, timeStart, dateStart, price, seatMatrix);
}

export async function update(
  id,
  filmId,
  screenId,
  timeStart,
  dateStart,
  price,
  seatMatrix
) {
  await show.update(
    id,
    filmId,
    screenId,
    timeStart,
    dateStart,
    price,
    seatMatrix
  );
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

export async function getByFilmIdFilmDetail(filmId) {
  const showByFilmIdInfor = await show.getByFilmIdFilmDetail(filmId);
  const showByFilmIdDTO = changeCinemasToListShowDto(showByFilmIdInfor);
  return showByFilmIdDTO;
}
