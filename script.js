function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex]; 
}

function singleRound(playerSelection, computerSelection) {
    
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }
    //Player wins
    else if (playerSelection === "Rock" & computerSelection === "Scissors") {
        return "You Win! Rock beats Scissors";
    }
    else if (playerSelection === "Paper" & computerSelection === "Rock") {
        return "You Win! Paper beats Rock";
    }
    else if (playerSelection === "Scissors" & computerSelection === "Paper") {
        return "You Win! Scissors beats Paper";
    }
    //computer wins
    else if (computerSelection === "Rock" & playerSelection === "Scissors") {
        return "You Lose! Rock beats Scissors";
    }
    else if (computerSelection === "Paper" & playerSelection === "Rock") {
        return "You Lose! Paper beats Rock";
    }
    else if (computerSelection === "Scissors" & playerSelection === "Paper") {
        return "You Lose! Scissors beats Paper";
    }
    else {
        return "Invalid Input\nMake sure you've selected one these: Rock, Paper, Scissors";
    }
}
