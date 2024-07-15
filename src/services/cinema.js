import * as cinema from '../repositories/cinema.js';
import * as screenServices from './screen.js';
import {
  changeCinemaListToDTO,
  changeCinemaToDTO,
} from '../utils/cinemaByProvinceCityDTO.js';

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

export async function getByIdForUser(id) {
  const cinemaByIdInfor = await cinema.getByIdForUser(id);
  return changeCinemaToDTO(cinemaByIdInfor);
}

export async function getByIdForAdmin(id) {
  const cinemaByIdInfor = await cinema.getByIdAdmin(id);
  return cinemaByIdInfor;
}

export async function getByProvinceCityId(provinceCityId) {
  const cinemaByProvinceCityIdInfor = await cinema.getByProvinceCityId(
    provinceCityId
  );
  return changeCinemaListToDTO(cinemaByProvinceCityIdInfor);
}

export async function getAllForAdmin() {
  const allCinemaInfor = await cinema.getAllForAdmin();
  return allCinemaInfor;
}

export async function getAllForUser() {
  const allCinemaInfor = await cinema.getAllForUser();
  return allCinemaInfor;
}

export async function getCinemaForAdmin({ id, provinceCityId }) {
  if (id) {
    return await getByIdForAdmin(id);
  }
  if (provinceCityId) {
    return await getByProvinceCityId(provinceCityId);
  }
  return await getAllForAdmin();
}

export async function getCinemaForUser({ id, provinceCityId }) {
  if (id) {
    return await getByIdForUser(id);
  }
  if (provinceCityId) {
    return await getByProvinceCityId(provinceCityId);
  }
  return await getAllForUser();
}
