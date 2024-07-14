export function changeFilmToDTO(filmObj) {
  const subtitleEx = filmObj.subtitle ? 'VN' : 'none subtitle';
  const filmDTO = {
    id: filmObj.id,
    poster: filmObj.poster,
    ageRating: filmObj.ageRate,
    format: filmObj.format,
    title: filmObj.filmName,
    trailerLink: filmObj.trailer,
    category: filmObj.category,
    nation: filmObj.language,
    subtitle: subtitleEx,
    duration: filmObj.duration,
  };

  return filmDTO;
}

export function changeFilmListToDTO(filmObjArr) {
  const filmDTOArr = filmObjArr.map(changeFilmToDTO);
  return filmDTOArr;
}
