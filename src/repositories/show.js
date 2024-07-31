import { STATUS } from '../constants/modelStatus.js';
import { db } from '../models/index.js';
import { Op } from 'sequelize';
import moment from 'moment';

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
  const showByFilmIdInfor = await db.cinema.findAll({
    include: {
      model: db.screen,
      required: true,
      attributes: {
        exclude: ['seatMatrix'],
      },
      include: {
        model: db.show,
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
    order: [[db.screen, db.show, 'timeStart', 'ASC']],
  });
  return showByFilmIdInfor;
}

export async function getByScreenId(screenId) {
  const showByScreenIdInfor = await show.findAll({
    include: {
      model: screen,
      required: true,
      attributes: ['name', 'status', 'id'],
      include: {
        model: show,
        attributes: ['id', 'timeStart', 'price', 'status', 'filmId'],
        required: true,
        include: {
          model: film,
          attributes: ['filmName', 'duration'],
        },
      },
    },
    where: {
      screenId,
    },
  });
  return showByScreenIdInfor;
}

export async function getByDateStart(dateStart) {
  const showByCinemaIdInfor = await cinema.findAll({
    include: {
      model: screen,
      required: true,
      attributes: ['name', 'status', 'id'],
      include: {
        model: show,
        attributes: ['id', 'timeStart', 'price', 'status', 'filmId'],
        required: true,
        include: {
          model: film,
          attributes: ['filmName', 'duration'],
        },
        where: {
          dateStart,
        },
      },
    },
    order: [[screen, show, 'timeStart', 'ASC']],
  });
  return showByCinemaIdInfor;
}

export async function getByDateStartScreenId(dateStart, screenId) {
  const showByCinemaIdInfor = await cinema.findAll({
    include: {
      model: screen,
      required: true,
      attributes: ['name', 'status', 'id'],
      include: {
        model: show,
        attributes: ['id', 'timeStart', 'price', 'status', 'filmId'],
        required: true,
        include: {
          model: film,
          attributes: ['filmName', 'duration'],
        },
        where: {
          dateStart,
        },
      },
      where: {
        id: screenId,
      },
    },
    order: [[screen, show, 'timeStart', 'ASC']],
  });
  return showByCinemaIdInfor;
}

export async function getByDateStartCinemaId(dateStart, cinemaId) {
  const showByCinemaIdInfor = await cinema.findAll({
    include: {
      model: screen,
      required: true,
      attributes: ['name', 'status', 'id'],
      include: {
        model: show,
        attributes: ['id', 'timeStart', 'price', 'status', 'filmId'],
        required: true,
        include: {
          model: film,
          attributes: ['filmName', 'duration'],
        },
        where: {
          dateStart,
        },
      },
    },
    where: {
      id: cinemaId,
    },
    order: [[screen, show, 'timeStart', 'ASC']],
  });
  return showByCinemaIdInfor;
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
        attributes: ['id', 'timeStart', 'price', 'status', 'filmId'],
        include: {
          model: film,
          attributes: ['filmName', 'duration'],
        },
      },
    },
  });
  return showByCinemaIdInfor;
}

export async function getByCinemaScreenDateStart({
  cinemaId,
  screenId,
  dateStart,
}) {
  const showsInfor = await cinema.findAll({
    where: {
      id: cinemaId,
    },
    include: {
      model: screen,
      attributes: ['name', 'status', 'id'],
      where: {
        id: screenId,
      },
      include: {
        model: show,
        attributes: ['id', 'timeStart', 'price', 'status', 'filmId'],
        include: {
          model: film,
          attributes: ['filmName', 'duration'],
        },
        where: {
          dateStart,
        },
      },
    },
    order: [[screen, show, 'timeStart', 'ASC']],
  });
  return showsInfor;
}
