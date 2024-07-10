export function changeFilmToFilmDetailDto(filmInfo) {
  let result = {};

  result.info = {
    id: filmInfo.id,
    filmName: filmInfo.filmName,
    duration: filmInfo.duration,
    description: filmInfo.description,
    dateStart: filmInfo.dateStart,
    dateEnd: filmInfo.dateEnd,
    director: filmInfo.director,
    actor: filmInfo.actor,
    subtitle: filmInfo.subtitle,
    dubbing: filmInfo.dubbing,
    language: filmInfo.language,
    poster: filmInfo.poster,
    trailer: filmInfo.trailer,
    format: filmInfo.format,
    ageRate: filmInfo.ageRate,
    category: filmInfo.category,
  };

  result.dateList = [];
  result.provinceList = [];

  filmInfo.shows.forEach((show) => {
    const isDateExist = result.dateList.find(
      (element) => element === show.dateStart
    );

    if (!isDateExist) {
      result.dateList.push(show.dateStart);
    }

    const isProvinceExist = result.provinceList.find(
      (element) => element.id === show.screen.cinema.provinceCityId
    );

    if (!isProvinceExist) {
      result.provinceList.push(show.screen.cinema.provinceCity);
    }
  });
  console.log(result);
  return result;
}

export function changeCinemasToListShowDto(cinemas) {
  const result = [];
  cinemas.forEach((cinema) => {
    if (!cinema.screens.length) {
      return;
    }

    let cinemaForm = {
      cinemaId: cinema.id,
      cinemaName: cinema.name,
      cinemaAddress: cinema.address,
      shows: [],
    };

    cinema.screens.forEach((screen) => {
      if (!screen.shows.length) {
        return;
      }
      screen.shows.forEach((show) => {
        let showForm = {
          showId: show.id,
          date: show.dateStart,
          time: show.timeStart,
          screenId: show.screenId,
        };

        cinemaForm.shows.push(showForm);
      });
    });

    result.push(cinemaForm);
  });

  return result;
}
