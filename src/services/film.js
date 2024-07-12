import * as film from '../repositories/film.js';
import { changeFilmToFilmDetailDto } from '../utils/filmDetailDTO.js';

export async function getAll() {
  const allFilmInfor = await film.getAll();
  return allFilmInfor;
}

export async function getByIdForUser(filmId) {
  const filmByIdInfor = await film.getByIdForUser(filmId);
  console.log()
  const filmByIdDTO = changeFilmToFilmDetailDto(filmByIdInfor);
  return filmByIdDTO;
}

export async function getFilmForUser({ id }) {
  if (id) {
    return await getByIdForUser(id);
  }
  return await getAll();
}
