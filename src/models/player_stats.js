const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const PlayerStats = sequelize.define('player_stats', {
    player_stats_id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    current_level: {
        type: DataTypes.INTEGER
    },
    current_money: {
        type: DataTypes.BIGINT
    },
    current_energy: {
        type: DataTypes.INTEGER
    },
    current_gold: {
        type: DataTypes.BIGINT
    },
    main_character_id: {
        type: DataTypes.BIGINT
    },
    owned_character_ids: {
        type: DataTypes.JSON
    },
    owned_character_levels: {
        type: DataTypes.JSON
    },
    owned_card_ids: {
        type: DataTypes.JSON
    }
}, {
    timestamps: false
});

module.exports = PlayerStats;