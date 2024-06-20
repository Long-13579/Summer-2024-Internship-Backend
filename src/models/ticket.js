export function ticket(sequelize, DataTypes) {
  const ticket = sequelize.define(
    'ticket',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      showId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      seatId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      seatName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      voucherId: {
        type: DataTypes.INTEGER,
      },
      isPaid: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        default: false
      },
      clientName: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      email: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      sequelize,
      tableName: 'ticket',
      modelName: 'ticket',
      timestamps: false,
    }
  );
  ticket.associate = (db) => {
    ticket.belongsTo(db.seat, {
      foreignKey: 'seatId',
      onDelete: 'NO ACTION',
      onUpdate: 'NO ACTION',
    });
    ticket.belongsTo(db.show, {
      foreignKey: 'showId',
      onDelete: 'NO ACTION',
      onUpdate: 'NO ACTION',
    });
    ticket.belongsTo(db.voucher, {
      foreignKey: 'voucherId',
      onDelete: 'NO ACTION',
      onUpdate: 'NO ACTION',
    });
    ticket.belongsTo(db.user, {
      foreignKey: 'userId',
      onDelete: 'NO ACTION',
      onUpdate: 'NO ACTION',
    });
  };
  return ticket;
}
