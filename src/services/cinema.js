import * as cinema from '../repositories/cinema.js';
import * as screenServices from './screen.js';

export async function add({ name, address, provinceCityId }) {
  await cinema.add({ name, address, provinceCityId });
}

export async function deactivate(id) {
  const screenByCinemaIdInfor = await screenServices.getByCinemaId(id);
  const screenByCinemaIdArrId = screenByCinemaIdInfor.map((index) => index.id);
  await screenServices.deactivate(screenByCinemaIdArrId);
  await cinema.deactivate(id);
}

export async function update({ id, name, address, provinceCityId }) {
  await cinema.update({ id, name, address, provinceCityId });
}

export async function getById(id) {
  const cinemaByIdInfor = await cinema.getById(id);
  return cinemaByIdInfor;
}

export async function getByProvinceCityId(provinceCityId) {
  const cinemaByProvinceCityIdInfor = await cinema.getByProvinceCityId(
    provinceCityId
  );
  return cinemaByProvinceCityIdInfor;
}

export async function getAll() {
  const allCinemaInfor = await cinema.getAll();
  return allCinemaInfor;
}

export async function getCinema(params) {
  if (params.id) {
    return await getById(params.id);
  }
  if (params.provinceCityId) {
    return await getByProvinceCityId(req.query.provinceCityId);
  }
  return await getAll();
}
