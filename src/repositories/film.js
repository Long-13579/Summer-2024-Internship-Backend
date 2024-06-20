import { db } from '../models/index.js';
import { Op } from 'sequelize';

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
  await db.film.create({
    filmName: filmName,
    duration: duration,
    description: description,
    dateStart: dateStart,
    dateEnd: dateEnd,
    director: director,
    actor: actor,
    subtitle: subtitle,
    dubbing: dubbing,
    language: language,
    poster: poster,
    trailer: trailer,
    format: format,
    ageRate: ageRate,
    category: category,
  });
}
export async function getAll() {
  const allFilmInfor = await db.film.findAll();
  return allFilmInfor;
}

export async function getById(filmId) {
  const filmByIdInfor = await db.film.findAll({
    where: {
      id: filmId,
    },
  });
  return filmByIdInfor;
}

export async function getUpComing() {
  const upcomingFilmInfor = await db.film.findAll({
    where: {
      dateStart: {
        [Op.gt]: new Date(),
      },
    },
  });
  return upcomingFilmInfor;
}

export async function getOnCasting() {
  const onCastingFilmInfor = await db.film.findAll({
    where: {
      dateEnd: {
        [Op.gt]: new Date(),
      },
    },
  });
  return onCastingFilmInfor;
}

