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

export async function getById(id) {
  const provinceCityByIdInfor = await provinceCity.getById(id);
  return provinceCityByIdInfor;
}

export async function getAllForUser() {
  const allProvinceUser = await provinceCity.getAllForUser();
  return allProvinceUser;
}

//get all province
export async function getAllForAdmin() {
  const allProvince = await provinceCity.getAllForAdmin();
  return allProvince;
}

export async function getProvinceCityForUser(params) {
  const provinceCityId = params.id;
  if (provinceCityId) {
    return await getById(provinceCityId);
  }
  return await getAllForUser();
}

export async function getProvinceCityForAdmin(params) {
  const provinceCityId = params.id;
  if (provinceCityId) {
    return await getById(provinceCityId);
  }
  return await getAllForAdmin();
}
