export function changeCinemaToDTO({ id, name, address, provinceCity }) {
  const DTO = {
    id,
    name,
    address,
    provinceCity: provinceCity.name,
  };
  return DTO;
}

export function changeCinemaListToDTO(cinemaArr) {
  const cinemaDTOArr = cinemaArr.map(changeCinemaToDTO);
  return cinemaDTOArr;
}
