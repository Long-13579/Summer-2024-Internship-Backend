import * as cinema from '../repositories/cinema.js';
import * as screen from '../repositories/screen.js';
import { changeToCinemaByIdAdminDTO } from '../utils/cinemaByIdAdminDTO.js';
import {
  changeCinemaToDTO,
  changeCinemaListToDTO,
} from '../utils/cinemaByProvinceCityDTO.js';

export async function add(name, address, provinceCityId) {
  await cinema.add(name, address, provinceCityId);
}

export async function drop(id) {
  await cinema.drop(id);
}

export async function update(id, name, address, provinceCityId) {
  await cinema.update(id, name, address, provinceCityId);
}

export async function getById(id) {
  const cinemaByIdInfor = await cinema.getById(id);
  if (cinemaByIdInfor == null) {
    return;
  }
  const cinemaDTO = changeCinemaToDTO(cinemaByIdInfor);
  return cinemaDTO;
}

export async function getByProvinceCityId(provinceCityId) {
  const cinemaByProvinceCityIdInfor = await cinema.getByProvinceCityId(
    provinceCityId
  );
  return cinemaByProvinceCityIdInfor;
}

export async function getAll() {
  const allCinemaInfor = await cinema.getAll();
  const allCinemaDTO = changeCinemaListToDTO(allCinemaInfor);
  return allCinemaDTO;
}

export async function getByIdAdmin(cinemaId) {
  const screenByCinemaIdInfor = await screen.getByCinemaId(cinemaId);
  const cinemaByIdInfor = await cinema.getById(cinemaId);
  const cinemaByIdAdminDTO = changeToCinemaByIdAdminDTO(
    screenByCinemaIdInfor,
    cinemaByIdInfor
  );
  return cinemaByIdAdminDTO;
}
