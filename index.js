let count = 0;
let highestScore = 0;

const message = document.getElementById('message');
const highscoreDisplay = document.getElementById('highscore');

window.onload = async function() {
    try {
        const response = await fetch('/highscore');
        const data = await response.json();
        highestScore = data.highscore;
        highscoreDisplay.textContent = `Highest Score: ${highestScore}`;
    } catch (error) {
        console.error('Error fetching highscore:', error);
    }
}

function displayMessage() {
    message.textContent = `Clicks: ${count}`;
    count += 1;

    if (count > highestScore) {
        highestScore = count;
        updateHighscore(highestScore);
    }
}


async function updateHighscore(newHighscore) {
    try {
        const response = await fetch('https://rohit-deka-rhd-e435a3203b63.herokuapp.com/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ highscore: newHighscore })
        });

        const data = await response.json();
        console.log('Highscore updated:', data);
        highscoreDisplay.textContent = `Highest Score: ${data.highscore}`;
    } catch (error) {
        console.error('Error updating highscore:', error);
    }
}
