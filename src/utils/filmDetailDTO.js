export function changeFilmToFilmDetailDto(filmQueryOBJ) {
  const { shows, ...filmInfo } = JSON.parse(JSON.stringify(filmQueryOBJ));
  
  var dateList = [];
  dateList = shows.map((show) => {
    const isDateExist = dateList.find((element) => element === show.dateStart);
    if (!isDateExist) {
      return show.dateStart;
    }
  });

  var provinceList = [];
  provinceList = shows.map((show) => {
    const isProvinceExist = provinceList.find(
      (element) => element.id === show.screen.cinema.provinceCityId
    );

    if (!isProvinceExist) {
      return show.screen.cinema.provinceCity;
    }
  });
  return { filmInfo, dateList, provinceList };
}

export function changeCinemasToListShowDto(cinemas) {
  const result = cinemas.map((cinema) => {
    const { id, name, address, screens } = cinema;
    if (!screens.length) {
      return;
    }
    const shows = screens.map((screen) => {
      if (!screen.shows.length) {
        return;
      }
      const showForm = screen.shows.map((show) => {
        const { id, dateStart, timeStart, screenId } = show;
        return {
          id,
          dateStart,
          timeStart,
          screenId,
        };
      });
      return showForm;
    });
    return { id, name, address, shows };
  });

  return result;
}
