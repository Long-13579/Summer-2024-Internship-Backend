import { db } from '../models/index.js';
const { cinema, screen, ...rest } = db;

export async function add({ name, address, provinceCityId }) {
  await cinema.create({
    name: name,
    address: address,
    provinceCityId: provinceCityId,
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

export async function getById(id) {
  const getCinemaByIdInfor = await db.cinema.findOne({
    include: {
      model: db.provinceCity,
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
  const getCinemaByProvinceIdInfor = await cinema.findOne({
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
  });
  return allCinemaInfor;
}

export async function getAllForAdmin() {
  const allCinemaInfor = await cinema.findAll({
    include: [
      {
        model: screen,
        attributes: ['name', 'size', 'status'],
        required: true,
      },
    ],
  });
  return allCinemaInfor;
}
