const Player = require('./player');
const PlayerStats = require('./player_stats');
const PlayerRelationships = require('./player_relationships');
const Characters = require('./characters');
const Skills = require('./skills');
const CharacterSkills = require('./character_skills');
const SkillCards = require('./skill_cards');
const Levels = require('./levels');
const Monsters = require('./monsters');
const sequelize = require('../config/database');

// PlayerStats references Characters
PlayerStats.belongsTo(Characters, {
    foreignKey: 'main_character_id',
    as: 'mainCharacter'
});

// Hàm kiểm tra kết nối
async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Database connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

// Hàm sync models
async function syncModels() {
    try {
        await sequelize.sync();
        console.log('All models were synchronized successfully.');
    } catch (error) {
        console.error('Error syncing models:', error);
    }
}

module.exports = {
    Player,
    PlayerStats,
    PlayerRelationships,
    Characters,
    Skills,
    CharacterSkills,
    SkillCards,
    Levels,
    Monsters,
    testConnection,
    syncModels
};