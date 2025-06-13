const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Monsters = sequelize.define('monsters', {
    monster_id: {
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
    damage: {
        type: DataTypes.INTEGER
    },
    health: {
        type: DataTypes.INTEGER
    },
    movement_speed: {
        type: DataTypes.FLOAT
    }
}, {
    timestamps: false
});

module.exports = Monsters;