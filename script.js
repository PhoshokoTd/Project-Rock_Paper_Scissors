function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex]; 
}

function singleRound(playerSelection, computerSelection) {
    
    if (playerSelection === computerSelection) {
        console.log("It's a tie!");
    }
    //Player wins
    else if (playerSelection === "Rock" & computerSelection === "Scissors") {
        console.log("You Win! Rock beats Scissors");
    }
    else if (playerSelection === "Paper" & computerSelection === "Rock") {
        console.log("You Win! Paper beats Rock");
    }
    else if (playerSelection === "Scissors" & computerSelection === "Paper") {
        console.log("You Win! Scissors beats Paper");
    }
    //computer wins
    else if (computerSelection === "Rock" & playerSelection === "Scissors") {
        console.log("You Lose! Rock beats Scissors");
    }
    else if (computerSelection === "Paper" & playerSelection === "Rock") {
        console.log("You Lose! Paper beats Rock");
    }
    else if (computerSelection === "Scissors" & playerSelection === "Paper") {
        console.log("You Lose! Scissors beats Paper");
    }
    else {
        console.log("Invalid Input\nMake sure you've selected one these: Rock, Paper, Scissors");
    }
}
