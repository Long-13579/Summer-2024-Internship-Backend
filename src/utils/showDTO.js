export function changeAllShowToDTO(showObj) {
  const DTO = [];
  const DTOLen = showObj.length;
  for (let i = 0; i < DTOLen; i++) {
    DTO[i] = {
      id: showObj[i].id,
      screenId: showObj[i].screenId,
      timeStart: showObj[i].timeStart,
      dateStart: showObj[i].dateStart,
      price: showObj[i].price,
      seatMatrix: showObj[i].seatMatrix,
      filmId: showObj[i].filmId,
      filmName: showObj[i].film.filmName,
    };
  }

  return DTO;
}
