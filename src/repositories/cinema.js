import { db } from '../models/index.js';
const { cinema, screen, provinceCity, ...rest } = db;

export async function add({ name, address, provinceCityId }) {
  await cinema.create({
    name: name,
    address: address,
    provinceCityId: provinceCityId,
    status: 1,
  });
}

export async function inactive(id) {
  await db.cinema.update(
    { status: 0 },
    {
      where: {
        id: id,
      },
    }
  );
}
export async function update({ id, name, address, provinceCityId }) {
  await cinema.update(
    { name: name, address: address, provinceCityId: provinceCityId },
    {
      where: {
        id: id,
      },
    }
  );
}

export async function getByIdForUser(id) {
  const getCinemaByIdInfor = await cinema.findOne({
    include: {
      model: provinceCity,
      attributes: ['name', 'id'],
    },
    where: {
      id: id,
    },
  });
  return getCinemaByIdInfor; //return that cinema's infor
}

export async function getByIdAdmin(id) {
  const getCinemaByIdInfor = await cinema.findOne({
    include: {
      model: screen,
      attributes: ['name', 'size', 'status', 'seatMatrix', 'id'],
    },
    where: {
      id: id,
    },
  });
  return getCinemaByIdInfor;
}

export async function getByProvinceCityId(provinceCityId) {
  const getCinemaByProvinceIdInfor = await cinema.findAll({
    include: {
      model: provinceCity,
      attributes: ['name', 'id'],
    },
    where: {
      provinceCityId: provinceCityId,
    },
  });
  return getCinemaByProvinceIdInfor;
}

export async function getAllForUser() {
  const allCinemaInfor = await cinema.findAll({
    attributes: ['id', 'name', 'address'],
    include: [
      {
        model: provinceCity,
        attributes: ['name', 'id'],
      },
    ],
    order: [['id', 'ASC']],
  });
  return allCinemaInfor;
}

export async function getAllForAdmin() {
  const allCinemaInfor = await cinema.findAll({
    attributes: ['id', 'name', 'address', 'status'],
    include: [
      {
        model: provinceCity,
        attributes: ['name', 'id'],
      },
    ],
    order: [['id', 'ASC']],
  });
  return allCinemaInfor;
}
