import cinemaRoute from './src/routes/cinema.js';
import provinceRoute from './src/routes/provinceCity.js';
import screenRoute from './src/routes/screen.js';
import showRoute from './src/routes/show.js';
import filmRoute from './src/routes/film.js';
import adminRoute from './src/routes/admin.js';
import seatMatrixRoute from './src/routes/seatMatrix.js';

import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/show', showRoute);
app.use('/film', filmRoute);
app.use('/cinema', cinemaRoute);
app.use('/provinceCity', provinceRoute);
app.use('/screen', screenRoute);
app.use('/admin', adminRoute);
app.use('/seatMatrix', seatMatrixRoute);
app.use('/user', userRoute);

app.listen(PORT, (error) => {
  if (error) console.log("Error occurred, server can't start", error);
  else
    console.log(
      'Server is Successfully Running, and App is listening on port ' + PORT
    );
});
