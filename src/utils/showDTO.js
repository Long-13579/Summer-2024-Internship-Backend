export function changeAllShowToDTO(showObj) {
    const DTO = showObj.map(({film:{filmName,...filmRest}, ...rest})=>{
        return {rest, filmName}
    })
    return DTO;
  }