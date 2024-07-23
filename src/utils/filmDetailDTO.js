export function changeFilmToFilmDetailDto(filmQueryOBJ) {
  const { shows, ...filmInfo } = JSON.parse(JSON.stringify(filmQueryOBJ));

  const dateListDuplicate = shows.map((show) => {
    return show.dateStart;
  });
  const dateList = [...new Set(dateListDuplicate)];
  const provinceListDuplicate = shows.map((show) => {
    return show.screen.cinema.provinceCity.name;
  });
  const provinceList = [...new Set(provinceListDuplicate)];
  return { filmInfo, dateList, provinceList };
}

export function changeCinemasToListShowDto(cinemas) {
  const result = cinemas.map((cinema) => {
    const { id, name, address, screens } = cinema;
    if (!screens.length) {
      return;
    }
    const shows = [];
    screens.forEach((screen) => {
      if (!screen.shows.length) {
        return;
      }
      screen.shows.forEach(({ id, dateStart, timeStart, screenId }) => {
        shows.push({
          id,
          dateStart,
          timeStart,
          screenId,
        });
      });
    });
    return { id, name, address, shows };
  });

  return result;
}
