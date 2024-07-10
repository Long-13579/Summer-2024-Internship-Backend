import * as show from '../repositories/show.js';
import * as screen from '../repositories/screen.js';
import { changeCinemasToListShowDto } from '../utils/filmDetailDTO.js';
import { changeAllShowToDTO } from '../utils/showDTO.js';
import { seat } from '../constants/seatMetrics.js';

export async function add(filmId, screenId, timeStart, dateStart, price) {
  const seatMatrixData = await takeSeatMatrixAndApplyPrice(screenId, price);
  await show.add(filmId, screenId, timeStart, dateStart, price, seatMatrixData);
}

export async function update(
  id,
  filmId,
  screenId,
  timeStart,
  dateStart,
  price
) {
  const seatMatrixData = await takeSeatMatrixAndApplyPrice(screenId, price);
  await show.update(
    id,
    filmId,
    screenId,
    timeStart,
    dateStart,
    price,
    seatMatrixData
  );
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

export async function getByFilmIdFilmDetail(filmId, date, provinceCityId) {
  const showByFilmIdInfor = await show.getByFilmIdFilmDetail(
    filmId,
    date,
    provinceCityId
  );
  console.log(JSON.stringify(showByFilmIdInfor, null, 2));
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
