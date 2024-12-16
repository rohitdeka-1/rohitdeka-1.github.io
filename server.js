const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors()); 
app.use(express.json()); 

const dbPath = path.join(__dirname, 'db.json');

const getHighscore = () => {
    try {
        const data = fs.readFileSync(dbPath, 'utf8');
        const parsedData = JSON.parse(data);
        return parsedData.highscore;
    } catch (err) {
        console.error('Error reading highscore:', err);
        return 0; 
    }
};


const updateHighscore = (newHighscore) => {
    const data = JSON.stringify({ highscore: newHighscore }, null, 2);
    fs.writeFileSync(dbPath, data, 'utf8');
};


app.get('/highscore', (req, res) => {
    const highscore = getHighscore();
    res.json({ highscore });
});


app.post('/highscore', (req, res) => {
    const { highscore: newHighscore } = req.body;

    if (newHighscore > getHighscore()) {
        updateHighscore(newHighscore);
        res.json({ message: 'Highscore updated', highscore: newHighscore });
    } else {
        res.json({ message: 'Highscore not updated', highscore: getHighscore() });
    }
});


app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
