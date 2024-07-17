export function changeFilmToFilmDetailDto(filmQueryOBJ) {
    const { shows, ...filmInfo } = JSON.parse(JSON.stringify(filmQueryOBJ));
  
    const dateListDuplicate = shows.map((show) => {
      return show.dateStart;
    });
    const dateList = [...new Set(dateListDuplicate)];
    const provinceListDuplicate = shows.map((show) => {
      return show.screen.cinema.provinceCity;
    });
    //Set to get unique objects
    let setObj = new Set(provinceListDuplicate.map(JSON.stringify));
    let provinceList = Array.from(setObj).map(JSON.parse);
    return { filmInfo, dateList, provinceList };
  }
  
  export function changeCinemasToListShowDto(cinemas) {
    const result = cinemas.map((cinema) => {
      const { id, name, address, screens } = cinema;
      if (!screens.length) {
        return;
      }
  
      const showFormat = screens.flatMap((screen) => {
        if (!screen.shows.length) {
          return;
        }
        return screen.shows.map(({ id, dateStart, timeStart, screenId }) => {
          return {
            id,
            dateStart,
            timeStart,
            screenId,
          };
        });
      });
      return { id, name, address, shows: showFormat };
    });
  
    return result;
  }