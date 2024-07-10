import { SCREEN_SIZE_LIST } from '../constants/enumScreen.js';
export function screen(sequelize, DataTypes) {
  const screen = sequelize.define(
    'screen',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        allowNull: false,
      },
      seatMatrix: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cinemaId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      size: {
        type: DataTypes.ENUM({
          values: SCREEN_SIZE_LIST,
        }),
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'screens',
      modelName: 'screen',
      timestamps: false,
    }
  );
  screen.associate = (db) => {
    screen.hasMany(db.show, {
      foreignKey: 'screenId',
      onDelete: 'NO ACTION',
      onUpdate: 'NO ACTION',
    });
    screen.belongsTo(db.cinema, {
      foreignKey: 'cinemaId',
      onDelete: 'NO ACTION',
      onUpdate: 'NO ACTION',
    });
  };
  return screen;
}
