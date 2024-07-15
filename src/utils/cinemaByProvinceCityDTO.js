export function changeCinemaToDTO({ id, name, address, provinceCity, status }) {
  const DTO = {
    id,
    name,
    address,
    provinceCity: provinceCity.name,
    status,
  };
  return DTO;
}

export function changeCinemaListToDTO(cinemaArr) {
  const cinemaDTOArr = cinemaArr.map(changeCinemaToDTO);
  return cinemaDTOArr;
}
