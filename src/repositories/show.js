import { db } from '../models/index.js';
const { show, screen, cinema, ...rest } = db;
export async function add({
  filmId,
  screenId,
  timeStart,
  dateStart,
  price,
  seatMatrix,
}) {
  await show.create({
    filmId,
    screenId,
    timeStart,
    dateStart,
    price,
    seatMatrix,
  });
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
      filmId,
      screenId,
      timeStart,
      dateStart,
      price,
      seatMatrix,
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
  const showByCinemaIdInfor = await cinema.findAll({
    where: {
      id: cinemaId,
    },
    include: {
      model: screen,
      attributes: ['id'],
      include: {
        model: show,
      },
    },
  });
  return showByCinemaIdInfor;
}

export async function getByCinemaScreenDate({ cinemaId, screenId, dateStart }) {
  const showsInfor = await cinema.findAll({
    where: {
      id: cinemaId,
    },
    include: {
      model: screen,
      where: {
        id: screenId,
      },
      include: {
        model: show,
        where: {
          dateStart: dateStart,
        },
      },
    },
  });
  return showsInfor;
}
