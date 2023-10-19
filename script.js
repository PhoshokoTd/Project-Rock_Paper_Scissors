function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex]; 
}

function singleRound(playerSelection, computerSelection) {
    
    if (playerSelection === computerSelection) {
        return 0;
    }
    //Player wins
    else if (playerSelection === "Rock" & computerSelection === "Scissors") {
        return 1;
    }
    else if (playerSelection === "Paper" & computerSelection === "Rock") {
        return 1;
    }
    else if (playerSelection === "Scissors" & computerSelection === "Paper") {
        return 1;
    }
    //computer wins
    else if (computerSelection === "Rock" & playerSelection === "Scissors") {
        return 2;
    }
    else if (computerSelection === "Paper" & playerSelection === "Rock") {
        return 2;
    }
    else if (computerSelection === "Scissors" & playerSelection === "Paper") {
        return 2;
    }
    else {
        return -1;
    }
}

function game() {
    //score 
    let player = 0
    let computer = 0

    for (let i = 1; i <= 5; i++) {
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("What is your selection: ");

        const outcome = singleRound(playerSelection, computerSelection);
        if (outcome === 1) {
            player += 1;
            console.log("Player: " + playerSelection,"\ncomputer: " + computerSelection);
            console.log("You Win! " + playerSelection+ " beats " + computerSelection);
        }
        else if (outcome === 2) {
            computer += 1;
            console.log("Player: " + playerSelection,"\ncomputer: " + computerSelection);
            console.log("You Lose! " + computerSelection+ " beats " + playerSelection);
        }
        else if (outcome === 0) {
            
            console.log("Player: " + playerSelection,"\ncomputer: " + computerSelection);
            console.log("it's a tie"); 
        }
        else {
            console.log("Invalid Input\nMake sure you've selected one these: Rock, Paper, Scissors")
        }
    }

    console.log("Player: " + player,"\ncomputer: " + computer)
    if (player === computer) {
        console.log("It's a draw");
    }
    else if (player > computer) {
        console.log("Congratulations! You won the game"); 
    }
    else {
        console.log("You Lost, Better luck next time!");
    }
}

//call the function
game()