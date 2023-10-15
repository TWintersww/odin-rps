let button = document.querySelector(".buttons");
let playerScore = document.querySelector(".playerScore");
let computerScore = document.querySelector(".computerScore");
let gameLog = document.querySelector(".gameLog");

let playerScoreTracker = 0;
let computerScoreTracker = 0;

button.addEventListener('click', playRound);

function playRound(event) {
    //first generate computer's move
    let computerMove = generateComputerMove();

    //now read event info from button press
    let playerMove = event.target.textContent;

    //create element and add to log
    let element = document.createElement('p');

    if (playerMove === computerMove) {
        element.textContent = `Tie: ${computerMove} ties against ${playerMove}`;
    }
    else if (playerMove == "rock" && computerMove == "scissors" || 
    playerMove == "scissors" && computerMove == "paper" ||
    playerMove == "paper" && computerMove == "rock") {
        element.textContent = `Win: Player's ${playerMove} wins against ${computerMove}`;
        updatePlayerScore();
    }
    else {
        element.textContent = `Lose: Player's ${playerMove} loses against ${computerMove}`;
        updateComputerScore();
    }

    gameLog.appendChild(element);

    setTimeout(checkGameEnd, 10);

}

function updatePlayerScore() {
    playerScoreTracker += 1;
    playerScore.textContent = playerScoreTracker;
}
function updateComputerScore() {
    computerScoreTracker += 1;
    computerScore.textContent = computerScoreTracker;
}
function checkGameEnd() {
    if (playerScoreTracker == 5) {
        alert("Congrats. You win!");
        resetDisplay();
    }
    else if (computerScoreTracker == 5) {
        alert("You lose :((((((");
        resetDisplay();
    }
}
function resetDisplay() {
    playerScoreTracker = 0;
    computerScoreTracker = 0;
    playerScore.textContent = '0';
    computerScore.textContent = '0';

    while (gameLog.firstChild) {
        gameLog.removeChild(gameLog.firstChild);
    }
}












function generateComputerMove() {
    let random = Math.floor(Math.random() * 3);

    switch(random) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}














/*
button.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.className) {
        case 'rock':
            console.log("rock");
            break;
        case 'paper':
            console.log("paper");
            break;
        case 'scissors':
            console.log('scissors');
            break;
    }
})
*/
