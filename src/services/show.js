import * as show from '../repositories/show.js';
import * as seatMatrix from '../repositories/seatMatrix.js';
import * as screenServices from './screen.js';
import * as screen from '../repositories/screen.js';
import { changeCinemasToListShowDto } from '../utils/filmDetailDTO.js';
import { changeAllShowToDTO } from '../utils/showDTO.js';
import { seat } from '../constants/seatMetrics.js';

export async function add({ filmId, screenId, timeStart, dateStart, price }) {
  const screenByIdInfor = await screenServices.getById(screenId);
  const seatMatrixByScreenId = screenByIdInfor.seatMatrix;
  const seatMatrixPriceApplied = seatMatrix.applyPriceToSeatMatrix(
    seatMatrixByScreenId,
    price
  );
  await show.add({
    filmId,
    screenId,
    timeStart,
    dateStart,
    price,
    seatMatrix: seatMatrixPriceApplied,
  });
}

export async function update({
  id,
  filmId,
  screenId,
  timeStart,
  dateStart,
  price,
  seatMatrix,
}) {
  await show.update({
    id,
    filmId,
    screenId,
    timeStart,
    dateStart,
    price,
    seatMatrix,
  });
}

export async function deactivate(id) {
  await show.deactivate(id);
}

export async function getAll() {
  const allShowInfor = await show.getAll();
  const allShowDTO = changeAllShowToDTO(allShowInfor);
  return allShowDTO;
}

export async function getById(id) {
  const showByIdInfor = await show.getById(id);
  return showByIdInfor;
}

export async function getByFilmIdAdmin(filmId) {
  const showByFilmIdInfor = await show.getByFilmIdAdmin(filmId);
  return showByFilmIdInfor;
}

export async function getByScreenId(screenId) {
  const showByScreenIdInfor = await show.getByScreenId(screenId);
  return showByScreenIdInfor;
}

export async function getByFilmIdDateStartProvinceCityId({
  filmId,
  dateStart,
  provinceCityId,
}) {
  const showByFilmIdInfor = await show.getByFilmIdDateStartProvinceCityId({
    filmId,
    dateStart,
    provinceCityId,
  });
  const showByFilmIdDTO = changeCinemasToListShowDto(showByFilmIdInfor);
  return showByFilmIdDTO;
}

export async function getByCinemaId(cinemaId) {
  const showByCinemaIdInfor = await show.getByCinemaId(cinemaId);
  return showByCinemaIdInfor;
}

export async function takeSeatMatrixAndApplyPrice(screenId, priceReq) {
  const screenByIdInfor = await screen.getById(screenId);
  const seatMatrixLen = Math.floor(screenByIdInfor.len / seat.len);
  const seatMatrixWidth = Math.floor(screenByIdInfor.width / seat.width);
  const seatMatrixData = screenByIdInfor.seatMatrix;
  const seatMatrixDataParsed = JSON.parse(seatMatrixData);
  const showPrice = priceReq;
  for (let colIndex = 0; colIndex < seatMatrixWidth; colIndex++) {
    for (let rowIndex = 0; rowIndex < seatMatrixLen; rowIndex++) {
      seatMatrixDataParsed.data[colIndex].rowSeats[rowIndex].price = showPrice;
    }
  }

  const seatMatrixDataStrjed = JSON.stringify(seatMatrixDataParsed);
  return seatMatrixDataStrjed;
}
export async function getByDateStart(dateStart) {
  const showByDateStartInfor = await show.getByDateStart(dateStart);
  return showByDateStartInfor;
}

export async function getByDateStartScreenId(dateStart, screenId) {
  const showByDateStartScreenIdInfor = await show.getByDateStartScreenId(
    dateStart,
    screenId
  );
  return showByDateStartScreenIdInfor;
}

export async function getByDateStartCinemaId(dateStart, cinemaId) {
  const showByDateStartCinemaIdInfor = await show.getByDateStartCinemaId(
    dateStart,
    cinemaId
  );
  return showByDateStartCinemaIdInfor;
}

export async function getByCinemaScreenDate({ cinemaId, screenId, dateStart }) {
  const showsInfor = await show.getByCinemaScreenDate({
    cinemaId,
    screenId,
    dateStart,
  });
  return showsInfor;
}

export async function getShowForAdmin({
  showId,
  filmId,
  screenId,
  cinemaId,
  dateStart,
}) {
  if (showId) {
    return await getById(showId);
  }
  if (cinemaId && screenId && dateStart) {
    return await getByCinemaScreenDate({ cinemaId, screenId, dateStart });
  }
  if (screenId && dateStart) {
    return await getByDateStartScreenId(dateStart, screenId);
  }
  if (cinemaId && dateStart) {
    return await getByDateStartCinemaId(dateStart, cinemaId);
  }
  if (dateStart) {
    return await getByDateStart(dateStart);
  }
  if (cinemaId) {
    return await getByCinemaId(cinemaId);
  }
  if (filmId) {
    return await getByFilmId(filmId);
  }
  if (screenId) {
    return await getByScreenId(screenId);
  }
  return await getAll();
}

export async function getShowForUser({ id }) {
  if (id) {
    return await getById(id);
  }
}
