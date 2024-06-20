'use strict';

import { Sequelize, DataTypes } from 'sequelize';
import { cinema } from './cinema.js';
import { screen } from './screen.js';
import { show } from './show.js';
import { seat } from './seat.js';
import { film } from './film.js';
import { ticket } from './ticket.js';
import { user } from './user.js';
import { voucher } from './voucher.js';
import configPathEnv from '../config/config.json' assert { type: 'json' };
import provinceCity from './provinceCity.js';

const env = process.env.NODE_ENV || 'development';
const config = configPathEnv[env];
const db = {};
const modelArr = [
  provinceCity,
  cinema,
  screen,
  show,
  seat,
  film,
  ticket,
  user,
  voucher,
];

let sequelize;

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

const modelNum = modelArr.length;

//get all model
for (let i = 0; i < modelNum; i++) {
  let modelFunction = modelArr[i];
  let model = modelFunction(sequelize, DataTypes);
  db[model.name] = model;
}

//associate key
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
export { db };
