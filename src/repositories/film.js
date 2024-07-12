import { db } from '../models/index.js';

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

export async function getByIdForUser(filmId) {
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

export async function getByIdForAdmin(filmId) {
  const filmByIdInfor = await db.film.findOne({
    where: {
      id: filmId,
    },
  });
  return filmByIdInfor;
}

