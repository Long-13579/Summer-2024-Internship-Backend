import {
  LANGUAGES_LIST,
  FORMATS_LIST,
  AGE_RATES_LIST,
  CATEGORIES_LIST,
} from '../constants/enumFilm.js';

export function film(sequelize, DataTypes) {
  const film = sequelize.define(
    'film',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        allowNull: false,
      },
      filmName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dateStart: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      dateEnd: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      director: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      actor: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subtitle: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      language: {
        type: DataTypes.ENUM({
          values: LANGUAGES_LIST,
        }),
        allowNull: false,
      },
      poster: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      trailer: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      dubbing: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      format: {
        type: DataTypes.ENUM({
          values: FORMATS_LIST,
        }),
        allowNull: false,
      },
      ageRate: {
        type: DataTypes.ENUM({
          values: AGE_RATES_LIST,
        }),
        allowNull: false,
      },
      category: {
        type: DataTypes.ENUM({
          values: CATEGORIES_LIST,
        }),
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'films',
      modelName: 'film',
      timestamps: false,
      freezeTableName: true,
    }
  );
  film.associate = (db) => {
    film.hasMany(db.show, {
      foreignKey: 'filmId',
      onDelete: 'NO ACTION',
      onUpdate: 'NO ACTION',
    });
  };
  return film;
}
