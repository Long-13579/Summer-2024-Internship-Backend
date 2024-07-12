import * as cinema from '../repositories/cinema.js';

export async function add({name, address, provinceCityId}) {
  await cinema.add({ name, address, provinceCityId });
}

export async function drop(id) {
  await cinema.drop(id);
}

export async function update({id, name, address, provinceCityId}) {
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
  const allCinemaDTO = changeCinemaListToDTO(allCinemaInfor);
  return allCinemaDTO;
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
