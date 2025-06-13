const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const PlayerRelationships = sequelize.define('player_relationships', {
    player_relationship_id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    friend_ids: {
        type: DataTypes.JSON
    },
    current_rank: {
        type: DataTypes.INTEGER
    },
    total_battles: {
        type: DataTypes.JSON
    }
}, {
    timestamps: false
});

module.exports = PlayerRelationships;