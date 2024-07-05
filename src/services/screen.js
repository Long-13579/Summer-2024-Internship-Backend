import * as screen from '../repositories/screen.js';
import * as seatMatrixServices from '../services/seatMatrix.js';

export async function add(cinemaId, name, width, length) {
  const seatMatrixData = seatMatrixServices.add(width, length);
  await screen.add(seatMatrixData, cinemaId, name);
}

export async function drop(id) {
  await screen.drop(id);
}

export async function update(id, cinemaId, name, width, length) {
  const seatMatrix = seatMatrixServices.add(width, length);
  await screen.update(id, seatMatrix, cinemaId, name);
}

export async function getAll() {
  const allScreenInfor = await screen.getAll();
  return allScreenInfor;
}

export async function getByCinemaId(cinemaId) {
  const screenByCinemaIdInfor = await screen.getByCinemaId(cinemaId);
  return screenByCinemaIdInfor;
}

export async function getById(id) {
  const screenByIdInfor = await screen.getById(id);
  return screenByIdInfor;
}

export async function updateSeatMatrix(id, seatMatrixData) {
  await screen.updateSeatMatrix(id, seatMatrixData);
}
