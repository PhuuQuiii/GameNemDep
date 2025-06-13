const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const SkillCards = sequelize.define('skill_cards', {
    skill_card_id: {
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
    prefab_path: {
        type: DataTypes.STRING(255)
    },
    stats: {
        type: DataTypes.JSON
    },
    stat_names: {
        type: DataTypes.JSON
    },
    skill_type: {
        type: DataTypes.STRING(50)
    },
    icon_path: {
        type: DataTypes.STRING(255)
    }
}, {
    timestamps: false
});

module.exports = SkillCards;