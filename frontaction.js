let wins = 0;
let losses = 0;

function playGame(userChoice) {
    fetch('https://api-gateway-url.amazonaws.com/prod/rps', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userChoice: userChoice }),
    })
    .then(response => response.json())
    .then(data => {
        const result = data.result;

        if (result === 'win') {
            wins++;
            document.getElementById('resultMessage').innerText = '🎉 You win!';
        } else if (result === 'lose') {
            losses++;
            document.getElementById('resultMessage').innerText = '😢 You lose!';
        } else {
            document.getElementById('resultMessage').innerText = "😐 It's a tie!, choose again!";
        }

        document.getElementById('winScore').innerText = `WIN : ${wins}`;
        document.getElementById('loseScore').innerText = `LOSE : ${losses}`;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('resultMessage').innerText = '⚠️ Something went wrong!';
    });
}

// Game buttons
document.querySelector('.rock').addEventListener('click', () => playGame('rock'));
document.querySelector('.paper').addEventListener('click', () => playGame('paper'));
document.querySelector('.scissors').addEventListener('click', () => playGame('scissors'));

// Reset button
document.querySelector('.reset_btn button').addEventListener('click', () => {
    wins = 0;
    losses = 0;
    document.getElementById('winScore').innerText = 'WIN : 0';
    document.getElementById('loseScore').innerText = 'LOSE : 0';
    document.getElementById('resultMessage').innerText = '';
});
