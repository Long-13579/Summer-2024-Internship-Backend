import { db } from '../models/index.js';

//add provinceCity
export async function add(name) {
  const newProvinceCity = await db.provinceCity.create({ name: name });
}
//delete
export async function drop(id) {
  await db.provinceCity.destroy({
    where: {
      id: id,
    },
  });
}
//update
export async function update(id, name) {
  await db.provinceCity.update(
    { name: name },
    {
      where: {
        id: id,
      },
    }
  );
}

//get By id
export async function getById(id) {
  const provinceCityByIdInfor = db.provinceCity.findOne({
    where: {
      id: id,
    },
  });
  return provinceCityByIdInfor;
}
//get all province from db
export async function getAll() {
  const allProvinceInfor = await db.provinceCity.findAll();
  return allProvinceInfor;
}

//get all province that have cinema
export async function getAllHaveCinema() {
  const allProvinceHaveCinemaInfor = await db.provinceCity.findAll({
    include: [
      {
        model: db.cinema,
        required: true,
      },
    ],
  });
  return allProvinceHaveCinemaInfor;
}
