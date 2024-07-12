export function show(sequelize, DataTypes) {
  const show = sequelize.define(
    'show',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        allowNull: false,
      },
      filmId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      screenId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      timeStart: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      dateStart: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      price: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      seatMatrix: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'shows',
      modelName: 'show',
      timestamps: false,
    }
  );
  show.associate = (db) => {
    show.belongsTo(db.screen, {
      foreignKey: 'screenId',
      onDelete: 'NO ACTION',
      onUpdate: 'NO ACTION',
    });
    show.belongsTo(db.film, {
      foreignKey: 'filmId',
      onDelete: 'NO ACTION',
      onUpdate: 'NO ACTION',
    });
    show.hasMany(db.ticket, {
      foreignKey: 'showId',
      onDelete: 'NO ACTION',
      onUpdate: 'NO ACTION',
    });
  };
  return show;
}
