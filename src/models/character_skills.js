const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Characters = require('./characters');
const Skills = require('./skills');

const CharacterSkills = sequelize.define('character_skills', {
    character_skill_id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    character_id: {
        type: DataTypes.BIGINT,
        references: {
            model: Characters,
            key: 'character_id'
        }
    },
    skill_id: {
        type: DataTypes.BIGINT,
        references: {
            model: Skills,
            key: 'skill_id'
        }
    }
}, {
    timestamps: false
});

// Define relationships
CharacterSkills.belongsTo(Characters, {
    foreignKey: 'character_id'
});

CharacterSkills.belongsTo(Skills, {
    foreignKey: 'skill_id'
});

Characters.hasMany(CharacterSkills, {
    foreignKey: 'character_id'
});

Skills.hasMany(CharacterSkills, {
    foreignKey: 'skill_id'
});

module.exports = CharacterSkills;