const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Levels = sequelize.define('levels', {
    level_id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    duration_seconds: {
        type: DataTypes.INTEGER
    },
    is_boss: {
        type: DataTypes.BOOLEAN
    },
    monster_ids: {
        type: DataTypes.JSON
    },
    monster_spawn_rates: {
        type: DataTypes.JSON
    }
}, {
    timestamps: false
});

module.exports = Levels;