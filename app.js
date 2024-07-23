import 'dotenv/config';
import express from 'express';
import cinemaRoute from './src/routes/cinema.js';
import provinceRoute from './src/routes/provinceCity.js';
import showRoute from './src/routes/show.js';
import screenRoute from './src/routes/screen.js';
import userRoute from './src/routes/user.js';
import filmRoute from './src/routes/film.js';
import adminRoute from './src/routes/admin.js';
import ticketRoute from './src/routes/ticket.js';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/cinema', cinemaRoute);
app.use('/provinceCity', provinceRoute);
app.use('/screen', screenRoute);
app.use('/show', showRoute);
app.use('/film', filmRoute);
app.use('/ticket', ticketRoute);
app.use('/user', userRoute);
app.use('/admin', adminRoute);

app.listen(PORT, (error) => {
  if (error) console.log("Error occurred, server can't start", error);
  else
    console.log(
      'Server is Successfully Running, and App is listening on port ' + PORT
    );
});
