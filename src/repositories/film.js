import { db } from '../models/index.js';
import { Op } from 'sequelize';
const { film, ...rest } = db;

//add films
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
  await film.create({
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
    status: 1,
  });
}
export async function getAll() {
  const allFilmInfor = await film.findAll();
  return allFilmInfor;
}

export async function getById(filmId) {
  const filmByIdInfor = await film.findAll({
    where: {
      id: filmId,
    },
  });
  return filmByIdInfor;
}

export async function getUpComing() {
  const upcomingFilmInfor = await film.findAll({
    where: {
      dateStart: {
        [Op.gt]: new Date(),
      },
    },
  });
  return upcomingFilmInfor;
}

export async function getOnCasting() {
  const onCastingFilmInfor = await film.findAll({
    where: {
      dateEnd: {
        [Op.gt]: new Date(),
      },
    },
  });
  return onCastingFilmInfor;
}
