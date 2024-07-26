import { db } from '../models/index.js';
const { screen, ...rest } = db;

export async function add({ seatMatrix, cinemaId, name, size }) {
  await screen.create({
    seatMatrix,
    cinemaId,
    name,
    size,
    status: 1,
  });
}

export async function deactivate(id) {
  await db.screen.update(
    { status: 0 },
    {
      where: {
        id: id,
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
  const screenByCinemaIdInfor = await screen.findAll({
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
