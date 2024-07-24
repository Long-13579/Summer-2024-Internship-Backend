import { db } from '../models/index.js';
import { Op } from 'sequelize';
const { film, show, screen, cinema, provinceCity, ...rest } = db;

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
  });
}
export async function getAll() {
  const allFilmInfor = await film.findAll({
    order: [['id', 'ASC']],
  });
  return allFilmInfor;
}

export async function getByIdForUser(filmId) {
  const filmByIdInfor = await film.findOne({
    include: [
      {
        model: show,
        required: true,
        attributes: {
          exclude: ['seatMatrix'],
        },
        include: {
          model: screen,
          attributes: {
            exclude: ['seatMatrix'],
          },
          required: true,
          include: {
            model: cinema,
            required: true,
            include: {
              model: provinceCity,
              attributes: {
                exclude: ['status'],
              },
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
  const filmByIdInfor = await db.film.findAll({
    order: [['id', 'ASC']],
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
    attributes: {
      exclude: ['status'],
    },
    order: [
      [show, 'dateStart', 'ASC'],
      [show, 'timeStart', 'ASC'],
    ],
  });
  return filmByCinemaIdInfor;
}

export async function getByIdForAdmin(filmId) {
  const filmByIdInfor = await film.findOne({
    where: {
      id: filmId,
    },
  });
  return filmByIdInfor;
}
