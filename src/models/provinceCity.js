export default (sequelize, DataTypes) => {
  const provinceCity = sequelize.define(
    'provinceCity',
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
    },
    {
      sequelize,
      tableName: 'provinceCity',
      modelName: 'provinceCity',
      timestamps: false,
      freezeTableName: true,
      tableName: 'provinceCity',
    }
  );
  provinceCity.associate = (db) => {
    provinceCity.hasMany(db.cinema, {
      foreignKey: 'provinceCityId',
      onDelete: 'NO ACTION',
      onUpdate: 'NO ACTION',
    });
  };
  return provinceCity;
};
