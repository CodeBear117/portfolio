// Require in the 'events' core module:
const express = require('express');
const app = express();

// Require our db Cluster0
const db = require('./mongoDbCluster0');

// Host on port defined in .env or port 5000
const PORT = process.env.PORT || 5000;

// Connect to db from server
db.connectToDb((err) => {
    if (!err) {
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    } else {
        console.log('Error connecting to database', err);
    }
});