import { db } from '../models/index.js';

export async function add(seatMatrix, cinemaId, name, width, len) {
  await db.screen.create({
    seatMatrix: seatMatrix,
    cinemaId: cinemaId,
    name: name,
    width: width,
    len: len,
  });
}

export async function drop(id) {
  await db.screen.destroy({
    where: {
      id: id,
    },
  });
}

export async function update(id, seatMatrix, cinemaId, name, len, width) {
  await db.screen.update(
    {
      seatMatrix: seatMatrix,
      cinemaId: cinemaId,
      name: name,
      len: len,
      width: width,
    },
    {
      where: {
        id: id,
      },
    }
  );
}

export async function getAll() {
  const allScreenInfor = await db.screen.findAll();
  return allScreenInfor;
}

export async function getByCinemaId(cinemaId) {
  const screenByCinemaIdInfor = await db.screen.findAll({
    where: {
      cinemaId: cinemaId,
    },
  });
  return screenByCinemaIdInfor;
}

export async function getById(id) {
  const screenByIdInfor = await db.screen.findOne({
    where: {
      id: id,
    },
  });
  return screenByIdInfor;
}

export async function updateSeatMatrix(id, seatMatrixData) {
  await db.screen.update(
    { seatMatrix: seatMatrixData },
    {
      where: {
        id: id,
      },
    }
  );
}
