export function eliminateNoShowFilm(obj) {
  const objLen = obj.length;
  const objDTO = [];
  for (let i = 0; i < objLen; i++) {
    if (obj[i].shows.length != 0) {
      objDTO.push(obj[i]);
    }
  }
  return objDTO;
}

export function DTO(arr) {
  const result = [];

  for (let film of arr) {
    const filmInfo = {
      id: film.id,
      filmName: film.filmName,
      duration: film.duration,
      description: film.description,
      dateStart: film.dateStart,
      dateEnd: film.dateEnd,
      director: film.director,
      actor: film.actor,
      subtitle: film.subtitle,
      language: film.language,
      poster: film.poster,
      trailer: film.trailer,
      dubbing: film.dubbing,
      format: film.format,
      ageRate: film.ageRate,
      category: film.category,
    };

    const showTime = [];

    for (let show of film.shows) {
      const existingDate = showTime.find(
        (entry) => entry.dateStart === show.dateStart
      );

      const showEntry = {
        id: show.id,
        timeStart: show.timeStart,
        screenId: show.screen.id,
      };

      if (existingDate) {
        existingDate.shows.push(showEntry);
      } else {
        showTime.push({
          dateStart: show.dateStart,
          shows: [showEntry],
        });
      }
    }

    result.push({
      infor: filmInfo,
      showTime: showTime,
    });
  }

  return result;
}
