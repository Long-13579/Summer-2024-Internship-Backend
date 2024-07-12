import * as film from '../repositories/film.js';
import { changeFilmToFilmDetailDto } from '../utils/filmDetailDTO.js';
//add films

export async function getAll() {
  const allFilmInfor = await film.getAll();
  return allFilmInfor;
}

export async function getByIdForUser(filmId) {
  const filmByIdInfor = await film.getByIdForUser(filmId);
  const filmByIdDTO = changeFilmToFilmDetailDto(filmByIdInfor);
  return filmByIdDTO;
}

export async function getFilmForUser(params) {
  if (params.id) {
    return await getByIdForUser(params.id);
  }
  return await getAll();
}
