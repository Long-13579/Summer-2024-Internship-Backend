import { db } from '../models/index.js';
import { Op, Sequelize } from 'sequelize';
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

export async function getByIdFilmDetail(filmId) {
  const filmByIdInfor = await db.film.findOne({
    include: [
      {
        model: db.show,
        include: {
          model: db.screen,
          include: {
            model: db.cinema,
            include: {
              model: db.provinceCity,
            },
          },
        },
      },
    ],
    where: {
      id: filmId,
    },
  });
  return filmByIdInfor;
}

export async function getByIdAdmin(filmId) {
  const filmByIdInfor = await db.film.findOne({
    where: {
      id: filmId,
    },
  });
  return filmByIdInfor;
}

export async function getAllAdmin() {
  const filmByIdInfor = await db.film.findAll();
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

export async function getByCinemaId(cinemaId) {
  const filmByCinemaIdInfor = await db.film.findAll({
    include: [
      {
        model: db.show,
        attributes: ['id', 'timeStart', 'dateStart'],
        include: [
          {
            model: db.screen,
            attributes: ['id'],
            where: {
              cinemaId: cinemaId,
            },
          },
        ],
      },
    ],
    order: [
      [db.show, 'dateStart', 'ASC'],
      [db.show, 'timeStart', 'ASC'],
    ],
  });
  const filmByCinemaIdDTO = DTO(eliminateNoShowFilm(filmByCinemaIdInfor));
  return filmByCinemaIdDTO;
}
