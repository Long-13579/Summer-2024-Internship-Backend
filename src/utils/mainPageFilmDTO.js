export function changeFilmToDTO({
  id,
  poster,
  ageRate,
  format,
  filmName,
  trailer,
  category,
  language,
  subtitle,
  duration,
}) {
  const subtitleEx = subtitle ? 'VN' : 'none subtitle';
  const filmDTO = {
    id,
    poster,
    ageRating: ageRate,
    format: format,
    title: filmName,
    trailerLink: trailer,
    category,
    nation: language,
    subtitle: subtitleEx,
    duration,
  };

  return filmDTO;
}

export function changeFilmListToDTO(filmObjArr) {
  const filmDTOArr = filmObjArr.map(changeFilmToDTO);
  return filmDTOArr;
}
