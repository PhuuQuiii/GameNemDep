const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Skills = sequelize.define('skills', {
    skill_id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(100)
    },
    description: {
        type: DataTypes.TEXT
    },
    skill_type: {
        type: DataTypes.STRING(50)
    },
    stat_names: {
        type: DataTypes.JSON
    },
    stats_level_1: {
        type: DataTypes.JSON
    },
    stats_level_2: {
        type: DataTypes.JSON
    },
    stats_level_3: {
        type: DataTypes.JSON
    },
    stats_level_4: {
        type: DataTypes.JSON
    },
    stats_level_5: {
        type: DataTypes.JSON
    }
}, {
    timestamps: false
});

module.exports = Skills;