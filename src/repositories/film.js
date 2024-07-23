import { db } from '../models/index.js';
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
  const allFilmInfor = await film.findAll();
  return allFilmInfor;
}

export async function getByIdForUser(filmId) {
  const filmByIdInfor = await film.findOne({
    include: [
      {
        model: show,
        required: true,
        include: {
          model: screen,
          required: true,
          include: {
            model: cinema,
            required: true,
            include: {
              model: provinceCity,
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
