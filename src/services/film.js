import * as film from '../repositories/film.js';
import { changeFilmListToDTO } from '../utils/mainPageFilmDTO.js';
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

export async function getUpComing() {
  const upComingFilmInfor = await film.getUpComing();
  const upComingFilmDTO = changeFilmListToDTO(upComingFilmInfor);
  return upComingFilmDTO;
}

export async function getOnCasting() {
  const onCastingFilmInfor = await film.getOnCasting();
  const onCastingFilmDTO = changeFilmListToDTO(onCastingFilmInfor);
  return onCastingFilmDTO;
}