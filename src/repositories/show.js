import { db } from '../models/index.js';
import { Op } from 'sequelize';
import moment from 'moment';

export async function add({
  filmId,
  screenId,
  timeStart,
  dateStart,
  price,
  seatMatrix
}) {
  await db.show.create({
    filmId: filmId,
    screenId: screenId,
    timeStart: timeStart,
    dateStart: dateStart,
    price: price,
    seatMatrix: seatMatrix,
  });
}

export async function update({
  id,
  filmId,
  screenId,
  timeStart,
  dateStart,
  price,
  seatMatrix
}) {
  await db.show.update(
    {
      filmId: filmId,
      screenId: screenId,
      timeStart: timeStart,
      dateStart: dateStart,
      price: price,
      seatMatrix: seatMatrix,
    },
    {
      where: {
        id: id,
      },
    }
  );
}

export async function getAll() {
  const allShowInfor = await db.show.findAll({
    include: {
      model: db.film,
      attributes: ['filmName'],
    },
    where: {
      dateStart: {
        [Op.gt]: moment(),
      },
    },
  });
  return allShowInfor;
}

export async function getById(id) {
  const showByIdInfor = await db.show.findOne({
    where: {
      id: id,
    },
  });
  return showByIdInfor;
}

export async function getByFilmIdAdmin(filmId) {
  const showByFilmIdInfor = await db.show.findAll({
    where: {
      filmId: filmId,
    },
  });
  return showByFilmIdInfor;
}

export async function getByFilmIdFilmDetail({filmId, dateStart, provinceCityId}) {
  const showByFilmIdInfor = await db.cinema.findAll({
    include: {
      model: db.screen,
      include: {
        model: db.show,
        where: {
          filmId: filmId,
          dateStart: dateStart,
        },
      },
    },
    where: {
      provinceCityId: provinceCityId,
    },
    order: [[db.screen, db.show, 'timeStart', 'ASC']],
  });
  return showByFilmIdInfor;
}

export async function getByScreenId(screenId) {
  const showByScreenIdInfor = await db.show.findAll({
    where: {
      screenId: screenId,
    },
  });
  return showByScreenIdInfor;
}

export async function updateSeatMatrix(showId, seatMatrix) {
  await db.show.update(
    { seatMatrix: seatMatrix },
    {
      where: {
        id: showId,
      },
    }
  );
}

export async function getByDate(dateStart) {
  const showByDateInfor = await db.show.findAll({
    where: {
      dateStart: dateStart,
    },
  });
  return showByDateInfor;
}

export async function getByCinemaId(cinemaId) {
  const showByCinemaIdInfor = await db.cinema.findAll({
    where: {
      id: cinemaId,
    },
    include: {
      model: db.screen,
      attributes: ['id'],
      include: {
        model: db.show,
      },
    },
  });
  return showByCinemaIdInfor;
}
