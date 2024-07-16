import { db } from '../models/index.js';
import { Op } from 'sequelize';
const { show, ...rest } = db;
export async function add({
  filmId,
  screenId,
  timeStart,
  dateStart,
  price,
  seatMatrix,
}) {
  await show.create({
    filmId: filmId,
    screenId: screenId,
    timeStart: timeStart,
    dateStart: dateStart,
    price: price,
    seatMatrix: seatMatrix,
  });
}

export async function inactive(id) {
  await show.update(
    { status: 0 },
    {
      where: {
        id: id,
      },
    }
  );
}

export async function inactiveMutiple(arrId) {
  await show.update(
    { status: 0 },
    {
      where: {
        id: {
          [Op.in]: arrId,
        },
      },
    }
  );
}

export async function update({
  id,
  filmId,
  screenId,
  timeStart,
  dateStart,
  price,
  seatMatrix,
}) {
  await show.update(
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
  const allShowInfor = await show.findAll();
  return allShowInfor;
}

export async function getById(id) {
  const showByIdInfor = await show.findAll({
    where: {
      id: id,
    },
  });
  return showByIdInfor;
}

export async function getByFilmId(filmId) {
  const showByFilmIdInfor = await show.findAll({
    where: {
      filmId: filmId,
    },
  });
  return showByFilmIdInfor;
}

export async function getByScreenId(screenId) {
  const showByScreenIdInfor = await show.findAll({
    where: {
      screenId: screenId,
    },
  });
  return showByScreenIdInfor;
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
