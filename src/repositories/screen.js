import { STATUS } from '../constants/modelStatus.js';
import { db } from '../models/index.js';

export async function add(seatMatrix, cinemaId) {
  await db.screen.create({
    seatMatrix: seatMatrix,
    cinemaId: cinemaId,
  });
}

export async function deactivate(ids) {
  await db.screen.update(
    { status: STATUS.INACTIVE },
    {
      where: {
        id: ids,
      },
    }
  );
}

export async function update({id, seatMatrix, cinemaId}) {
  await db.screen.update(
    { seatMatrix: seatMatrix, cinemaId: cinemaId },
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
