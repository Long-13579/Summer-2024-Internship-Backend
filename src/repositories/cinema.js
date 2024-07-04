import { db } from '../models/index.js';

export async function add(name, address, provinceCityId) {
  await db.cinema.create({
    name: name,
    address: address,
    provinceCityId: provinceCityId,
  });
}

export async function drop(id) {
  await db.cinema.destroy({
    where: {
      id: id,
    },
  });
}

export async function update(id, name, address, provinceCityId) {
  await db.cinema.update(
    { name: name, address: address, provinceCityId: provinceCityId },
    {
      where: {
        id: id,
      },
    }
  );
}

export async function getById(id) {
  const getCinemaByIdInfor = await db.cinema.findOne({
    include: {
      model: db.provinceCity,
      attributes: ['name'],
    },
    where: {
      id: id,
    },
  });
  return getCinemaByIdInfor; //return that cinema's infor
}

export async function getByProvinceCityId(provinceCityId) {
  const getCinemaByProvinceIdInfor = await db.cinema.findAll({
    where: {
      provinceCityId: provinceCityId,
    },
  });
  return getCinemaByProvinceIdInfor;
}
export async function getAll() {
  const allCinemaInfor = await db.cinema.findAll({
    attributes: ['id', 'name', 'address'],
    include: [
      {
        model: db.provinceCity,
        attributes: ['name'],
      },
    ],
  });
  return allCinemaInfor;
}
