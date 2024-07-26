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
      id: id,
    },
  });
  return showByIdInfor;
}

export async function getByFilmIdAdmin(filmId) {
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
          attributes: ['filmName'],
        },
      },
    },
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

export async function getByDateStart(dateStart) {
  try {
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
            attributes: ['filmName'],
          },
          where: {
            dateStart: dateStart,
          },
        },
      },
      order: [[screen, show, 'timeStart', 'ASC']],
    });
    return showByCinemaIdInfor;
  } catch (error) {
    console.log(error);
  }
}

export async function getByDateStartScreenId(dateStart, screenId) {
  try {
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
            attributes: ['filmName'],
          },
          where: {
            dateStart: dateStart,
          },
        },
        where: {
          id: screenId,
        },
      },
      order: [[screen, show, 'timeStart', 'ASC']],
    });
    return showByCinemaIdInfor;
  } catch (error) {
    console.log(error);
  }
}

export async function getByDateStartCinemaId(dateStart, cinemaId) {
  try {
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
            attributes: ['filmName'],
          },
          where: {
            dateStart: dateStart,
          },
        },
      },
      where: {
        id: cinemaId,
      },
      order: [[screen, show, 'timeStart', 'ASC']],
    });
    return showByCinemaIdInfor;
  } catch (error) {
    console.log(error);
  }
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
          attributes: ['filmName'],
        },
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
      attributes: ['name', 'status', 'id'],
      where: {
        id: screenId,
      },
      include: {
        model: show,
        attributes: ['id', 'timeStart', 'price', 'status', 'filmId'],
        include: {
          model: film,
          attributes: ['filmName'],
        },
        where: {
          dateStart: dateStart,
        },
      },
    },
    order: [[screen, show, 'timeStart', 'ASC']],
  });
  return showsInfor;
}
