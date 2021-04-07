export default (sequelize, DataTypes) => {
    const PlayersTable = sequelize.define(
      'players',
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
    return PlayersTable;
  };
  