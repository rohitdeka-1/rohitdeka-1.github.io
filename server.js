const express = require('express');
const { Low, JSONFile } = require('lowdb');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Initialize the database
const db = new Low(new JSONFile('db.json'));
db.data = { highestScore: 0 };

// Serve the frontend files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Get the highest score
app.get('/highscore', async (req, res) => {
    await db.read();
    res.json({ highestScore: db.data.highestScore });
});

// Submit a new score
app.post('/highscore', async (req, res) => {
    const { score } = req.body;
    await db.read();
    if (score > db.data.highestScore) {
        db.data.highestScore = score;
        await db.write();
        res.json({ message: 'New highest score!', highestScore: db.data.highestScore });
    } else {
        res.json({ message: 'Score did not beat the highest score', highestScore: db.data.highestScore });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
