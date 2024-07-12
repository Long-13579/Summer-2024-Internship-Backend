import { db } from '../models/index.js';
const { cinema, provinceCity, ...rest } = db;
export async function add({ name, address, provinceCityId }) {
  await cinema.create({
    name,
    address,
    provinceCityId,
  });
}

export async function drop(id) {
  await cinema.destroy({
    where: {
      id: id,
    },
  });
}
export async function update({ id, name, address, provinceCityId }) {
  await cinema.update(
    { name, address, provinceCityId },
    {
      where: {
        id: id,
      },
    }
  );
}

export async function getById(id) {
  const getCinemaByIdInfor = await cinema.findOne({
    include: {
      model: provinceCity,
      attributes: ['name'],
    },
    where: {
      id: id,
    },
  });
  return getCinemaByIdInfor; //return that cinema's infor
}

export async function getByProvinceCityId(provinceCityId) {
  const getCinemaByProvinceIdInfor = await cinema.findAll({
    include: {
      model: provinceCity,
      attributes: ['name'],
    },
    where: {
      provinceCityId: provinceCityId,
    },
  });
  return getCinemaByProvinceIdInfor;
}
export async function getAll() {
  const allCinemaInfor = await cinema.findAll({
    attributes: ['id', 'name', 'address'],
    include: [
      {
        model: provinceCity,
        attributes: ['name'],
      },
    ],
  });
  return allCinemaInfor;
}
