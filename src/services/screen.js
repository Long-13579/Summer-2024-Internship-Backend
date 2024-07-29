import * as screen from '../repositories/screen.js';
import * as show from '../repositories/show.js';

export async function add(seatMatrix, cinemaId) {
  await screen.add(seatMatrix, cinemaId);
}

export async function deactivate(id) {
  const showsByScreenIdInfor = await show.getByScreenId(id);
  const showsByScreenIdArrId = showsByScreenIdInfor.map(({id}) => id);
  await show.deactivate(showsByScreenIdArrId);
  await screen.deactivate(id);
}

export async function update({id, seatMatrix, cinemaId}) {
  await screen.update({id, seatMatrix, cinemaId});
}

export async function getAll() {
  const allScreenInfor = await screen.getAll();
  return allScreenInfor;
}

export async function getByCinemaId(cinemaId) {
  const screenByCinemaIdInfor = await screen.getByCinemaId(cinemaId);
  return screenByCinemaIdInfor;
}

export async function getById(id) {
  const screenByIdInfor = await screen.getById(id);
  return screenByIdInfor;
}

export async function getScreen({ id, cinemaId }) {
  if (id) {
    return await getById(id);
  }
  if (cinemaId) {
    return await getByCinemaId(cinemaId);
  }
  return await getAll();
}
