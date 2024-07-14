import * as film from '../repositories/film.js';
import { changeFilmListToDTO } from '../utils/mainPageFilmDTO.js';
import {
  eliminateFilmWithoutShow,
  transformToDTO,
} from '../utils/filmByCinemaSiteDTO.js';

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

export async function getByCinemaId(cinemaId) {
  const filmByCinemaIdInfor = await film.getByCinemaId(cinemaId);
  const filmByCinemaIdDTO = transformToDTO(
    eliminateFilmWithoutShow(filmByCinemaIdInfor)
  );
  return filmByCinemaIdDTO;
}
export async function getAll() {
  const allFilmInfor = await film.getAll();
  return allFilmInfor;
}

export async function getFilmForUser({ cinemaId }) {
  if (cinemaId) {
    return await getByCinemaId(cinemaId);
  }
  return await getAll();
}
