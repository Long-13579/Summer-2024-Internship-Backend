'use strict';
import 'dotenv/config';
import { Sequelize, DataTypes } from 'sequelize';
import { cinema } from './cinema.js';
import { screen } from './screen.js';
import { show } from './show.js';
import { seat } from './seat.js';
import { film } from './film.js';
import { ticket } from './ticket.js';
import { user } from './user.js';
import { voucher } from './voucher.js';
import { env } from '../config/config.js';
import { configPathEnv } from '../config/config.js';
import provinceCity from './provinceCity.js';

const config = configPathEnv[env];

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

const modules = modelArr.reduce((accumulator, model) => {
  const dbModule = model(sequelize, DataTypes);
  return { ...accumulator, [dbModule.name]: dbModule };
}, {});

//associate key
Object.values(modules).forEach((model) => {
  if (model.associate) {
    model.associate(modules);
  }
});

modules.sequelize = sequelize;
modules.Sequelize = Sequelize;
export { modules as db };
