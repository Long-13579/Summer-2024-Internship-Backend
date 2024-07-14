export function eliminateFilmWithoutShow(films) {
  const filmsContainShow = films.filter((film) => {
    return film.shows.length > 0;
  });
  return filmsContainShow;
}

export function transformToDTO(films) {
  const result = films.map((film) => {
    const { shows, ...filmInfo } = JSON.parse(JSON.stringify(film));
    //take unique dateStartArr
    const dateStartArr = [
      ...new Set(
        shows.map(({ dateStart, ...rest }) => {
          return dateStart;
        })
      ),
    ];
    const showTime = dateStartArr.map((dateStart) => {
      return { dateStart, shows: [] };
    });
    //push showByTimeStart into it's dateStart
    shows.map(({ id, timeStart, dateStart, screen }) => {
      const dateIndex = showTime.findIndex(
        (date) => date.dateStart === dateStart
      );
      showTime[dateIndex].shows.push({ id, timeStart, screenId: screen.id });
    });
    return { infor: filmInfo, showTime };
  });
  return result;
}
