export default (sequelize, DataTypes) => {
<<<<<<< HEAD
    const PlayersTable = sequelize.define(
      'players',
=======
    const PositionsTable = sequelize.define(
      'positions',
>>>>>>> 5c1aac80f630df6024ffc3497b0d5950a30bf120
      {
        position_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        position_name: {
          type: DataTypes.STRING,
        },
        position_description: {
          type: DataTypes.STRING,
        },
      },
      { freezeTableName: true, timestamps: false }
    );
<<<<<<< HEAD
    return PlayersTable;
  };
  
=======
    return PositionsTable;
  };
>>>>>>> 5c1aac80f630df6024ffc3497b0d5950a30bf120
