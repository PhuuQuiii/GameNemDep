const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { testConnection, syncModels } = require('./models');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Test database connection and sync models
(async () => {
    await testConnection();
    await syncModels();
})();

// Basic health check route
app.get('/health', (req, res) => {
    res.json({ status: 'OK', message: 'Server is running' });
});

// Routes will be added here
// app.use('/api/players', require('./routes/players'));
// app.use('/api/characters', require('./routes/characters'));
// etc...

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});