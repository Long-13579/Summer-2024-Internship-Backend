import { provinceCity, cinema } from '../models/index.js';

//add provinceCity
export async function add(name) {
  await provinceCity.create({ name: name });
}
//delete
export async function drop(id) {
  await provinceCity.destroy({
    where: {
      id: id,
    },
  });
}
//update
export async function update(id, name) {
  await provinceCity.update(
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
  const provinceCityByIdInfor = await provinceCity.findOne({
    where: {
      id: id,
    },
  });
  return provinceCityByIdInfor;
}
//get all province from db
export async function getAllForAdmin() {
  const allProvinceInfor = await provinceCity.findAll();
  return allProvinceInfor;
}

//get all province that have cinema
export async function getAllForUser() {
  const allProvinceHaveCinemaInfor = await provinceCity.findAll({
    include: [
      {
        model: cinema,
        required: true,
      },
    ],
  });
  return allProvinceHaveCinemaInfor;
}
