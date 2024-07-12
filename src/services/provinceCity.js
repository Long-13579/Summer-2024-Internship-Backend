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
  if (params.id) {
    return await getById(params.id);
  }
  return await getAllForUser();
}

export async function getProvinceCityForAdmin({ id }) {
  if (id) {
    return await getById(id);
  }
  return await getAllForAdmin();
}
