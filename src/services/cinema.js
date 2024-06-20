import * as cinema from '../repositories/cinema.js';
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
