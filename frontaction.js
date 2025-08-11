let wins = 0;
let losses = 0;

function playGame(userChoice) {
    fetch('https://q81zpnbwi5.execute-api.us-east-2.amazonaws.com/Production/play', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userChoice: userChoice }),
    })
    .then(response => response.json())
    .then(data => {
        const result = data.result; 
        const computer = data.computerChoice; 

        const emojiMap = {
            rock: '👊',
            paper: '🖐️',
            scissors: '✌️'
        };

        document.getElementById('computerChoice').innerText = `🤖 Computer chose: ${computer.toUpperCase()} ${emojiMap[computer]}`;

        document.getElementById('resultMessage').innerText = 
          `You chose: ${userChoice.toUpperCase()} ${emojiMap[userChoice]}, Computer chose: ${computer.toUpperCase()} ${emojiMap[computer]}. You ${result}!`;

        if (result === 'win') {
            wins++;
        } else if (result === 'lose') {
            losses++;
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
    document.getElementById('computerChoice').innerText = ''; 
});
