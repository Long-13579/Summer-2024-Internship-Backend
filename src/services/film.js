import * as film from '../repositories/film.js';
import { changeFilmListToDTO } from '../utils/mainPageFilmDTO.js';
import { changeFilmToFilmDetailDto } from '../utils/filmDetailDTO.js';
import { eliminateNoShowFilm, DTO } from '../utils/filmByCinemaSiteDTO.js';
//add films
export async function add(
  filmName,
  duration,
  description,
  dateStart,
  dateEnd,
  director,
  actor,
  subtitle,
  dubbing,
  language,
  poster,
  trailer,
  format,
  ageRate,
  category
) {
  await film.add(
    filmName,
    duration,
    description,
    dateStart,
    dateEnd,
    director,
    actor,
    subtitle,
    dubbing,
    language,
    poster,
    trailer,
    format,
    ageRate,
    category
  );
}
export async function getAll() {
  const allFilmInfor = await film.getAll();
  return allFilmInfor;
}

export async function getByIdForUser(filmId) {
  const filmByIdInfor = await film.getByIdForUser(filmId);
  const filmByIdDTO = changeFilmToFilmDetailDto(filmByIdInfor);
  return filmByIdDTO;
}

export async function getByIdAdmin(filmId) {
  const filmByIdInfor = await film.getByIdAdmin(filmId);
  return filmByIdInfor;
}

export async function getAllAdmin() {
  const allFilmInfor = await film.getAllAdmin();
  return allFilmInfor;
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

export async function getByCinemaId(cinemaId) {
  const filmByCinemaIdInfor = await film.getByCinemaId(cinemaId);
  const filmByCinemaIdDTO = DTO(eliminateNoShowFilm(filmByCinemaIdInfor));
  return filmByCinemaIdDTO;
}

export async function getFilmAdmin({ id, cinemaId }) {
  if (id) {
    return await getByIdAdmin(id);
  }
  if (cinemaId) {
    return await getByCinemaId(cinemaId);
  }
  return await getAllAdmin();
}

export async function getFilmForUser({ filmId, cinemaId }) {
  if (filmId) {
    return await getByIdForUser(filmId);
  }
  if (cinemaId) {
    return await getByCinemaId(cinemaId);
  }
  return await getAll();
}
