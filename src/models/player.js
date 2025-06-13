const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const PlayerStats = require("./player_stats");
const PlayerRelationships = require("./player_relationships");

const Player = sequelize.define(
  "player",
  {
    player_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    player_uid: {
      type: DataTypes.STRING(255),
    },
    player_stats_id: {
      type: DataTypes.BIGINT,
      references: {
        model: PlayerStats,
        key: "player_stats_id",
      },
    },
    player_relation_id: {
      type: DataTypes.BIGINT,
      references: {
        model: PlayerRelationships,
        key: "player_relationship_id",
      },
    },
    name: {
      type: DataTypes.STRING(50),
    },
    gender: {
      type: DataTypes.ENUM("male", "female", "other"),
    },
  },
  {
    timestamps: false,
  }
);

// Define relationships
Player.belongsTo(PlayerStats, {
  foreignKey: "player_stats_id",
});

Player.belongsTo(PlayerRelationships, {
  foreignKey: "player_relation_id",
});

PlayerStats.hasOne(Player, {
  foreignKey: "player_stats_id",
});

PlayerRelationships.hasOne(Player, {
  foreignKey: "player_relation_id",
});

module.exports = Player;
