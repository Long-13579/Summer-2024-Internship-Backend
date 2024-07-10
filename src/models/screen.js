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
      len: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      width: {
        type: DataTypes.INTEGER,
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
