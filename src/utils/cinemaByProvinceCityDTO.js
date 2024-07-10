export function changeCinemaToDTO(cinema) {
  const DTO = {
    id: cinema.id,
    name: cinema.name,
    address: cinema.address,
    provinceCity: cinema.provinceCity.name,
    provinceId: cinema.provinceCity.id,
  };
  return DTO;
}

export function changeCinemaListToDTO(cinemaArr) {
  const DTO = [];
  const cinemaArrLen = cinemaArr.length;
  for (let i = 0; i < cinemaArrLen; i++) {
    DTO[i] = {
      id: cinemaArr[i].id,
      name: cinemaArr[i].name,
      address: cinemaArr[i].address,
      provinceCity: cinemaArr[i].provinceCity.name,
      provinceId: cinemaArr[i].provinceCity.id,
    };
  }
  return DTO;
}
