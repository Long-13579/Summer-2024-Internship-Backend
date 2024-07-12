export function seat(sequelize, DataTypes){
  const seat = sequelize.define(
    'seat',
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
      addOn: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'seat',
      modelName: 'seat',
      timestamps: false,
    }
  );
  seat.associate = (db) => {
    seat.hasMany(db.ticket, {
      foreignKey: 'seatId',
      onDelete: 'NO ACTION',
      onUpdate: 'NO ACTION',
    });
  };
  return seat;
};
