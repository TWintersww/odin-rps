function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    // console.log(choice);

    switch (choice) {
        case 0:
            return("rock");
        case 1:
            return("paper");
        case 2:
            return("scissors");

    }
}

function playRPS(playerSelection, computerSelection) {
    //manually entered playerSelection. Prints out both plays and result

    let player = playerSelection.toLowerCase();
    let computer = computerSelection();

    console.log("player played " + player);
    console.log("computer played " + computer);

    if (player == computer) {
        return `Tie. Neither wins`;
    }
    else if (player == "rock" && computer == "scissors" || 
        player == "scissors" && computer == "paper" ||
        player == "paper" && computer == "rock") {
        return `You win! ${player} beats ${computer}.`;
    }
    else {
        return `You lose. ${computer} beats ${player}.`;
    }
}

function playRPSWL(playerSelection, computerSelection) {
    //returns boolean for win or lose

    let player = playerSelection.toLowerCase();
    let computer = computerSelection();

    // console.log("player played " + player);
    // console.log("computer played " + computer);

    if (player == computer) {
        return 0;
    }
    else if (player == "rock" && computer == "scissors" || 
        player == "scissors" && computer == "paper" ||
        player == "paper" && computer == "rock") {
        return 1;
    }
    else {
        return 0;
    }
}

function playRPSWLInput(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection();

    // console.log("player played " + player);
    // console.log("computer played " + computer);

    if (player == computer) {
        return 0;
    }
    else if (player == "rock" && computer == "scissors" || 
        player == "scissors" && computer == "paper" ||
        player == "paper" && computer == "rock") {
        return 1;
    }
    else {
        return 0;
    }
}

function game() {
    // gets user input for 5 matches, then prints out number of times you win
    let winCount = 0;
    for (let i = 0; i < 5; i++) {
        if (playRPSWL(prompt(), getComputerChoice)) {
            winCount++;
        }
    }
    console.log("you won " + winCount + " times");
}

//console.log(getComputerChoice());
//console.log(playRPS("ROCK", getComputerChoice));
game();

