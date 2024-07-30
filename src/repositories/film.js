import { STATUS } from '../constants/modelStatus.js';
import { screen, show, film, cinema, provinceCity } from '../models/index.js';
import { Op } from 'sequelize';

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
    status: STATUS.ACTIVE,
  });
}

export async function update({
  id,
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
  await film.update(
    {
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
    },
    {
      where: {
        id,
      },
    }
  );
}

export async function deactivate(ids) {
  await film.update(
    { status: STATUS.INACTIVE },
    {
      where: {
        id: ids,
      },
    }
  );
}

export async function getAll() {
  const allFilmInfor = await film.findAll();
  return allFilmInfor;
}

export async function getAllAdmin() {
  const filmByIdInfor = await film.findAll({
    order: [['id', 'ASC']],
  });
  return filmByIdInfor;
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
    order: [[show, 'dateStart', 'asc']],
    where: {
      id: filmId,
    },
  });
  return filmByIdInfor;
}

export async function getByIdForAdmin(filmId) {
  const filmByIdInfor = await film.findOne({
    where: {
      id: filmId,
    },
  });
  return filmByIdInfor;
}

export async function getUpComing() {
  const upcomingFilmInfor = await film.findAll({
    include: {
      model: show,
      required: true,
      attributes: [],
    },
    where: {
      dateStart: {
        [Op.gt]: new Date(),
      },
    },
  });
  return upcomingFilmInfor;
}

export async function getOnCasting() {
  const onCastingFilmInfor = await film.findAll({
    include: {
      model: show,
      required: true,
      attributes: [],
    },
    where: {
      [Op.and]: [
        {
          dateEnd: {
            [Op.gt]: new Date(),
          },
        },
        {
          dateStart: {
            [Op.lt]: new Date(),
          },
        },
      ],
    },
  });
  return onCastingFilmInfor;
}

export async function getByCinemaId(cinemaId) {
  const filmByCinemaIdInfor = await film.findAll({
    include: {
      model: show,
      required: true,
      attributes: ['id', 'timeStart', 'dateStart'],
      include: [
        {
          model: screen,
          attributes: ['id'],
          where: {
            cinemaId: cinemaId,
          },
        },
      ],
    },
    attributes: {
      exclude: ['status'],
    },
    order: [
      [show, 'dateStart', 'ASC'],
      [show, 'timeStart', 'ASC'],
    ],
    where: {
      [Op.and]: [
        {
          dateStart: {
            [Op.lte]: new Date(),
          },
        },
        {
          dateEnd: {
            [Op.gte]: new Date(),
          },
        },
      ],
    },
  });
  return filmByCinemaIdInfor;
}
