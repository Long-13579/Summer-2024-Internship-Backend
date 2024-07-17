import * as cinema from '../repositories/cinema.js';

export async function add({ name, address, provinceCityId }) {
  await cinema.add({ name, address, provinceCityId });
}

export async function drop(id) {
  await cinema.drop(id);
}

export async function update({ id, name, address, provinceCityId }) {
  await cinema.update({ id, name, address, provinceCityId });
}

export async function getById(id) {
  const cinemaByIdInfor = await cinema.getById(id);
  return cinemaByIdInfor;
}

export async function getByIdForAdmin(id) {
  const cinemaByIdInfor = await cinema.getByIdAdmin(id);
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

export async function getCinemaForAdmin({ id, provinceCityId }) {
  if (id) {
    return await getByIdForAdmin(id);
  }
  if (provinceCityId) {
    return await getByProvinceCityId(provinceCityId);
  }
  return await getAll();
}
