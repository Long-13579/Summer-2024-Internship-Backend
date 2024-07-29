import { STATUS } from '../constants/modelStatus.js';
import { cinema, screen, provinceCity, } from '../models/index.js';

export async function add({ name, address, provinceCityId }) {
  await cinema.create({
    name: name,
    address: address,
    provinceCityId: provinceCityId,
    status: STATUS.ACTIVE,
  });
}

export async function deactivate(id) {
  await cinema.update(
    { status: STATUS.INACTIVE },
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
      id,
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
      id,
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
      {
        model: screen,
        attributes: {
          exclude: ['seatMatrix'],
        },
      },
    ],
    order: [['id', 'ASC']],
  });
  return allCinemaInfor;
}