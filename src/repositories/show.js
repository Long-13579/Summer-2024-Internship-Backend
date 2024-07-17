import { STATUS } from '../constants/modelStatus.js';
import { db } from '../models/index.js';
const { show, screen, cinema, film, ...rest } = db;
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

export async function deactivate(ids) {
  await show.update(
    { status: STATUS.INACTIVE },
    {
      where: {
        id: ids,
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
  const showByIdInfor = await show.findOne({
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

export async function getByFilmIdDateStartProvinceCityId({
  filmId,
  dateStart,
  provinceCityId,
}) {
  const showByFilmIdInfor = await cinema.findAll({
    include: {
      model: screen,
      required: true,
      attributes: {
        exclude: ['seatMatrix'],
      },
      include: {
        model: show,
        required: true,
        attributes: {
          exclude: ['seatMatrix'],
        },
        where: {
          filmId,
          dateStart,
        },
      },
    },
    where: {
      provinceCityId,
    },
    order: [[screen, show, 'timeStart', 'ASC']],
  });
  return showByFilmIdInfor;
}

export async function getByCinemaScreenDateStart({
  cinemaId,
  screenId,
  dateStart,
}) {
  const showsInfor = await cinema.findAll({
    include: {
      model: screen,
      attributes: ['name', 'status', 'id'],
      include: {
        model: show,
        attributes: ['id', 'timeStart', 'price', 'status', 'filmId'],
        include: {
          model: film,
          attributes: ['filmName', 'duration'],
        },
        ...(dateStart
          ? {
              where: {
                dateStart,
              },
            }
          : {}),
      },
      ...(screenId
        ? {
            where: {
              id: screenId,
            },
          }
        : {}),
    },
    ...(cinemaId
      ? {
          where: {
            id: cinemaId,
          },
        }
      : {}),
    order: [[screen, show, 'timeStart', 'ASC']],
  });
  return showsInfor;
}
