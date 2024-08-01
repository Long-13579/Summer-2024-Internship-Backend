export function changeAllShowToDTO(showObj) {
  const DTO = (JSON.parse(JSON.stringify(showObj))).map(({ film: { filmName, ...filmRest }, ...rest }) => {
    return { ...rest, filmName };
  });
  return DTO;
}
