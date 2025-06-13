const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Characters = sequelize.define('characters', {
    character_id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(100)
    },
    prefab_path: {
        type: DataTypes.STRING(255)
    },
    max_health: {
        type: DataTypes.INTEGER
    },
    max_energy: {
        type: DataTypes.INTEGER
    },
    skill_icon: {
        type: DataTypes.STRING(255)
    }
}, {
    timestamps: false
});

module.exports = Characters;