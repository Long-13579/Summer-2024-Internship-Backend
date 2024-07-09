export function changeToCinemaByIdAdminDTO(
  screenByCinemaIdInfor,
  cinemaByIdInfor
) {
  const cinemaByIdAdminDTO = {
    id: cinemaByIdInfor.id,
    seatMatrix: cinemaByIdInfor.seatMatrix,
    cinemaId: cinemaByIdInfor.cinemaId,
    name: cinemaByIdInfor.name,
    provinceCityId: cinemaByIdInfor.provinceCityId,
    provinceCityName: cinemaByIdInfor.provinceCity.name,
  };
  const screenArr = [];
  const screenArrLen = screenByCinemaIdInfor.length;
  for (let i = 0; i < screenArrLen; i++) {
    screenArr.push(screenByCinemaIdInfor[i]);
  }
  cinemaByIdAdminDTO.screenList = screenArr;
  return cinemaByIdAdminDTO;
}
