export function cinema(sequelize, DataTypes) {
  const cinema = sequelize.define(
    'cinema',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      provinceCityId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'cinemas',
      modelName: 'cinema',
      timestamps: false,
    }
  );
  cinema.associate = (db) => {
    cinema.belongsTo(db.provinceCity, {
      foreignKey: 'provinceCityId',
      onDelete: 'NO ACTION',
      onUpdate: 'NO ACTION',
    });
    cinema.hasMany(db.screen, {
      foreignKey: 'cinemaId',
      onDelete: 'NO ACTION',
      onUpdate: 'NO ACTION',
    });
  };
  return cinema;
}
