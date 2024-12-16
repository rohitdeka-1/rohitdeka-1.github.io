var count = 0;

function displayMessage() {
    const message = document.getElementById('message');
    message.textContent = "Clicks: " + count;
    count += 1;
    console.log(count);
}

async function updateHighScore() {
    const response = await fetch('/highscore', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ score: count })
    });

    const data = await response.json();
    console.log(data.message);
    console.log('Current High Score: ' + data.highestScore);
}

async function checkHighScore() {
    const response = await fetch('/highscore');
    const data = await response.json();
    console.log('Highest Score: ' + data.highestScore);
}

// Fetch the highest score when the page loads
window.onload = checkHighScore;
