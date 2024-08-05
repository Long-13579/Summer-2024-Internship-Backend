import { STATUS } from '../constants/modelStatus.js';
import { db } from '../models/index.js';
import { Op } from 'sequelize';
import moment from 'moment';
import * as filmRepo from './film.js';
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
    status: 1,
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
        id,
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
    order: [['id', 'ASC']],
  });
  return allShowInfor;
}

export async function getById(id) {
  const showByIdInfor = await show.findOne({
    include: {
      model: screen,
      attributes: ['name'],
    },
    where: {
      id,
    },
  });
  return showByIdInfor;
}

export async function getByFilmIdAdmin(filmId) {
  const showByFilmIdInfor = await show.findAll({
    where: {
      filmId,
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
      required: true,
      attributes: ['name', 'status', 'id'],
      include: {
        model: show,
        required: true,
        attributes: ['id', 'timeStart', 'price', 'status', 'filmId'],
        include: {
          model: film,
          required: true,
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

export async function checkDateFilmIdToAddShow({ dateStart, filmId }) {
  const filmByIdDateStartInfor = await film.findAll({
    where: {
      [Op.and]: [
        { id: filmId },
        { dateStart: { [Op.lt]: dateStart } },
        { dateEnd: { [Op.gt]: dateStart } },
      ],
    },
  });
  const invalidDate = filmByIdDateStartInfor?.length === 0;
  return invalidDate;
}

export async function checkPreviousTimeStart({
  dateStart,
  timeStart,
  screenId,
  filmId,
}) {
  const { duration, ...rest } = await filmRepo.getByIdAdmin(filmId);
  const previousShow = await show.findOne({
    where: {
      [Op.and]: [
        {
          timeStart: {
            [Op.lt]: timeStart,
          },
        },
        {
          screenId,
        },
        {
          dateStart,
        },
      ],
    },
    order: [['timeStart', 'desc']],
  });
  if (previousShow === null) {
    return true;
  }
  const filmByShowId = await previousShow.getFilm();
  const previousShowTimeStart = moment(
    previousShow.timeStart,
    'HHmmss'
  ).format();
  const previousShowTimeEnd = moment(previousShowTimeStart)
    .add(filmByShowId.duration, 'm')
    .format();
  const timeStartReq = moment(timeStart, 'HHmmss').format();
  return moment(timeStartReq).isAfter(previousShowTimeEnd);
}

export async function checkPostTimeStart({
  dateStart,
  timeStart,
  screenId,
  filmId,
}) {
  const { duration, ...rest } = await filmRepo.getByIdAdmin(filmId);
  const postShow = await show.findOne({
    where: {
      [Op.and]: [
        {
          timeStart: {
            [Op.gt]: timeStart,
          },
        },
        {
          screenId,
        },
        {
          dateStart,
        },
      ],
    },
    order: [['timeStart', 'asc']],
  });
  if (postShow === null) {
    return true;
  }
  const postShowTimeStart = moment(postShow.timeStart, 'HHmmss').format();
  const reqShowTimeStart = moment(timeStart, 'HHmmss').format();
  const reqShowTimeEnd = moment(reqShowTimeStart).add(duration, 'm').format();
  return moment(reqShowTimeEnd).isBefore(postShowTimeStart);
}
