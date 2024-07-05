import * as film from '../repositories/film.js';
import { changeFilmListToDTO } from '../utils/mainPageFilmDTO.js';
import { changeFilmToFilmDetailDto } from '../utils/filmDetailDTO.js';
import { changeFilmPosterUrl, changeListFilmPosterUrl } from '../utils/changePosterUrl.js'
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
  changeListFilmPosterUrl(allFilmInfor);
  return allFilmInfor;
}

export async function getByIdFilmDetail(filmId) {
  const filmByIdInfor = await film.getByIdFilmDetail(filmId);
  changeFilmPosterUrl(filmByIdInfor);
  const filmByIdDTO = changeFilmToFilmDetailDto(filmByIdInfor);
  return filmByIdDTO;
}

export async function getByIdAdmin(filmId){
  const filmByIdInfor = await film.getByIdAdmin(filmId);
  changeFilmPosterUrl(filmByIdInfor);
  return filmByIdInfor;
}

export async function getUpComing() {
  const upComingFilmInfor = await film.getUpComing();
  changeListFilmPosterUrl(upComingFilmInfor);
  const upComingFilmDTO = changeFilmListToDTO(upComingFilmInfor);

  return upComingFilmDTO;
}

export async function getOnCasting() {
  const onCastingFilmInfor = await film.getOnCasting();
  changeListFilmPosterUrl(onCastingFilmDTO);
  const onCastingFilmDTO = changeFilmListToDTO(onCastingFilmInfor);
  return onCastingFilmDTO;
}

export async function getByCinemaId(cinemaId) {
  const filmByCinemaIdInfor = await film.getByCinemaId(cinemaId);
  return filmByCinemaIdInfor;
}

