import { db } from '../models/index.js';
import { Op } from 'sequelize';

export async function add(
  filmId,
  screenId,
  timeStart,
  dateStart,
  price,
  seatMatrix
) {
  await db.show.create({
    filmId: filmId,
    screenId: screenId,
    timeStart: timeStart,
    dateStart: dateStart,
    price: price,
    seatMatrix: seatMatrix,
  });
}

export async function update(
  id,
  filmId,
  screenId,
  timeStart,
  dateStart,
  price,
  seatMatrix
) {
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
  const allShowInfor = await db.show.findAll();
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
  const showByFilmIdInfor = await db.cinema.findAll({
    where: {
      filmId: filmId,
    },
  });
  return showByFilmIdInfor;
}

export async function getByFilmIdFilmDetail(filmId) {
  const showByFilmIdInfor = await db.cinema.findAll({
    include: {
      model: db.screen,
      include: {
        model: db.show,
        where: {
          filmId: filmId,
        },
      },
    },
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

export async function getByMutipleScreenId(screenIdArr) {
  const showByMutipleScreenIdInfor = await db.show.findAll({
    where: {
      screenId: {
        [Op.in]: screenIdArr,
      },
    },
  });
  return showByMutipleScreenIdInfor;
}
