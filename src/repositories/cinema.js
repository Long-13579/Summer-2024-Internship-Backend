import { STATUS } from '../constants/modelStatus.js';
import { db } from '../models/index.js';
const { cinema, screen, ...rest } = db;

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

export async function getById(id) {
  const getCinemaByIdInfor = await cinema.findOne({
    where: {
      id: id,
    },
  });
  return getCinemaByIdInfor; //return that cinema's infor
}

export async function getByProvinceCityId(provinceCityId) {
  const getCinemaByProvinceIdInfor = await cinema.findOne({
    where: {
      provinceCityId: provinceCityId,
    },
  });
  return getCinemaByProvinceIdInfor;
}
export async function getAll() {
  const allCinemaInfor = await cinema.findAll({
    include: [
      {
        model: screen,
        required: true,
      },
    ],
  });
  return allCinemaInfor;
}
