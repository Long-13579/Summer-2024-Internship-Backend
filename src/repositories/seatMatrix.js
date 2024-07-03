import fs from 'fs';

const seatMatrixByShowFolderPath =
  '../models/seatMatrix/showsMatrix/seatMatrix';

export function setStatus(seatMatrixId, seatsBookedCount, seatsBookedData) {
  const seatMatrixPath = seatMatrixByShowFolderPath + seatMatrixId + '.json';

  fs.readFile(seatMatrixPath, (error, seatMatrixData) => {
    if (error) {
      console.log(error);
      return;
    }
    const parsedSeatMatrixData = JSON.parse(seatMatrixData);

    //find seats' data index with rowName
    const rowNameIndexArr = [];
    for (var i = 0; i < seatsBookedCount; i++) {
      rowNameIndexArr[i].push(
        parsedSeatMatrixData.data.findIndex((obj) => {
          obj.rowName == seatsBookedData.data[i].rowName;
          return;
        })
      );
    }

    //change status depend on seatsBookData
    for (let i = 0; i < seatsBookedCount; i++) {
      const rowNameIndex = rowNameIndexArr[i];
      const bookedSeatId = seatsBookedData.data[i].colId;

      parsedSeatMatrixData.data[rowNameIndex].rowSeats[bookedSeatId].isOff =
        seatsBookedData.data[i].status;
    }

    fs.writeFile(
      seatMatrixPath,
      JSON.stringify(parsedSeatMatrixData, null, 2),
      (error) => {
        if (error) {
          console.log('An error has occurred ', error);
          return;
        }
        console.log('Data written successfully to disk');
      }
    );
  });
}

export function setSoldStatus(seatMatrixId, colId, rowName, status) {
  const seatMatrixPath = seatMatrixByShowFolderPath + seatMatrixId + '.json';

  fs.readFile(seatMatrixPath, (error, seatMatrixData) => {
    if (error) {
      console.log(error);
      return;
    }
    const parsedSeatMatrixData = JSON.parse(seatMatrixData);

    //find seats' data index with rowName
    const rowNameIndexArr = [];
    for (var i = 0; i < seatsBookedCount; i++) {
      rowNameIndexArr[i].push(
        parsedSeatMatrixData.data.findIndex((obj) => {
          obj.rowName == seatsBookedData.data[i].rowName;
          return;
        })
      );
    }
    //change status depend on seatsBookData
    for (let i = 0; i < seatsBookedCount; i++) {
      const rowNameIndex = rowNameIndexArr[i];
      const bookedSeatId = seatsBookedData.data[i].colId;

      parsedSeatMatrixData.data[rowNameIndex].rowSeats[bookedSeatId].isSold =
        seatsBookedData.data[i].status;
    }

    fs.writeFile(
      seatMatrixPath,
      JSON.stringify(parsedSeatMatrixData, null, 2),
      (error) => {
        if (error) {
          console.log('An error has occurred ', error);
          return;
        }
        console.log('Data written successfully to disk');
      }
    );
  });
}

export function setOnHoldStatus(seatMatrixId, colId, rowName, status) {
  const seatMatrixPath = seatMatrixByShowFolderPath + seatMatrixId + '.json';

  fs.readFile(seatMatrixPath, (error, seatMatrixData) => {
    if (error) {
      console.log(error);
      return;
    }
    const parsedSeatMatrixData = JSON.parse(seatMatrixData);

    //find seats' data index with rowName
    const rowNameIndexArr = [];
    for (var i = 0; i < seatsBookedCount; i++) {
      rowNameIndexArr[i].push(
        parsedSeatMatrixData.data.findIndex((obj) => {
          obj.rowName == seatsBookedData.data[i].rowName;
          return;
        })
      );
    }

    //change status depend on seatsBookData
    for (let i = 0; i < seatsBookedCount; i++) {
      const rowNameIndex = rowNameIndexArr[i];
      const bookedSeatId = seatsBookedData.data[i].colId;

      parsedSeatMatrixData.data[rowNameIndex].rowSeats[bookedSeatId].onHold =
        seatsBookedData.data[i].status;
    }

    fs.writeFile(
      seatMatrixPath,
      JSON.stringify(parsedSeatMatrixData, null, 2),
      (error) => {
        if (error) {
          console.log('An error has occurred ', error);
          return;
        }
        console.log('Data written successfully to disk');
      }
    );
  });
}

//273
se