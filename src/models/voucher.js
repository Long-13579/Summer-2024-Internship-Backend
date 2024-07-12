export function voucher(sequelize, DataTypes) {
  const voucher = sequelize.define(
    'voucher',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        allowNull: false,
      },
      condition: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      value: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'voucher',
      modelName: 'voucher',
      timestamps: false,
    }
  );
  voucher.associate = (db) => {
    voucher.hasMany(db.ticket, {
      foreignKey: 'voucherId',
      onDelete: 'NO ACTION',
      onUpdate: 'NO ACTION',
    });
  };
  return voucher;
}
