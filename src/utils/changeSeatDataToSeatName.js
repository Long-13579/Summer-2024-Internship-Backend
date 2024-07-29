export function changeSeatDataToSeatName(seatData) {
    const seatDataObj = JSON.parse(seatData);
    const listSeatName = seatDataObj.map(seat => {
        return seat.name;
    });
    return listSeatName.join(', ');
}