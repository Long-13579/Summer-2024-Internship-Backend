import { STATUS } from '../constants/modelStatus.js';
import { screen, cinema } from '../models/index.js';

export async function add({ seatMatrix, cinemaId, name, size }) {
  await screen.create({
    seatMatrix,
    cinemaId,
    name,
    size,
    status: STATUS.INACTIVE,
  });
}

export async function deactivate(ids) {
  await screen.update(
    { status: STATUS.INACTIVE },
    {
      where: {
        id: ids,
      },
    }
  );
}

export async function update({ id, seatMatrix, cinemaId }) {
  await screen.update(
    { seatMatrix: seatMatrix, cinemaId: cinemaId },
    {
      where: {
        id: id,
      },
    }
  );
}

export async function getAll() {
  const allScreenInfor = await screen.findAll();
  return allScreenInfor;
}

export async function getByCinemaId(cinemaId) {
  const screenByCinemaIdInfor = await db.screen.findAll({
    include: {
      model: cinema,
    },
    where: {
      cinemaId: cinemaId,
    },
  });
  return screenByCinemaIdInfor;
}

export async function getById(id) {
  const screenByIdInfor = await screen.findOne({
    where: {
      id: id,
    },
  });
  return screenByIdInfor;
}
