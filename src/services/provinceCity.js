import * as provinceCity from '../repositories/provinceCity.js';

export async function add(name) {
  await provinceCity.add(name);
}

export async function drop(provinceCityId) {
  await provinceCity.drop(provinceCityId);
}

export async function update(provinceCityId, name) {
  await provinceCity.update(provinceCityId, name);
}

export async function getById(provinceCityId) {
  const provinceCityByIdInfor = await provinceCity.getById(
    provinceCityId
  );
  return provinceCityByIdInfor;
}

export async function getAllHaveCinema(cinemaId) {
  const allProvinceHaveCinema = await provinceCity.getAllHaveCinema();
  return allProvinceHaveCinema;
}

//get all province
export async function getAll() {
  const allProvince = await provinceCity.getAll();
  return allProvince;
}
