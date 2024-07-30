import * as film from '../repositories/film.js';
import * as show from '../repositories/show.js';
import { changeFilmListToDTO } from '../utils/mainPageFilmDTO.js';
import { changeFilmToFilmDetailDto } from '../utils/filmDetailDTO.js';
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

export async function getByIdForAdmin(id){
  const filmByIdInfor = await film.getByIdForAdmin(id);
  return filmByIdInfor;
}

export async function getAll() {
  const allFilmInfor = await film.getAll();
  return allFilmInfor;
}

export async function getAllAdmin() {
  const allFilmInfor = await film.getAllAdmin();
  return allFilmInfor;
}

export async function getByIdForUser(filmId) {
  const filmByIdInfor = await film.getByIdForUser(filmId);
  const filmByIdDTO = changeFilmToFilmDetailDto(filmByIdInfor);
  return filmByIdDTO;
}

export async function getFilmAdmin({ id, cinemaId }) {
  if (id) {
    return await getByIdForAdmin(id);
  }
  if (cinemaId) {
    return await getByCinemaId(cinemaId);
  }
  return await getAllAdmin();
}


export async function getFilmForUser({ id, cinemaId }) {
  if (id) {
    return await getByIdForUser(id);
  }
  if (cinemaId) {
    return await getByCinemaId(cinemaId);
  }
  return await getAll();
}

export async function add({
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
  category,
}) {
  await film.add({
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
    category,
  });
}

export async function update({
  id,
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
  category,
}) {
  await film.update({
    id,
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
    category,
  });
}

export async function deactivate(id) {
  const showsByFilmIdInfor = await show.getByFilmId(id);
  const showsByFilmIdArrId = showsByFilmIdInfor.map(({ id }) => id);
  await show.deactivate(showsByFilmIdArrId);
  await film.deactivate(id);
}
