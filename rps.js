function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "rock";
    }
    else if (choice === 1) {
        return "scissors";
    }
    else if (choice === 2) {
        return "paper";
    }
}

function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return `Draw! You both picked ${playerSelection}.`;
    }
    else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            cScore++;
            return "You lose! Paper beats rock.";
        }
        else if (computerSelection === "scissors") {
            pScore++;
            return "You win! Rock beats scissors."
        } 
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            pScore++;
            return "You win! Paper beats rock.";
        }
        else if (computerSelection === "scissors") {
            cScore++;
            return "You lose! Scissors beats rock.";
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            cScore++;
            return "You lose! Rock beats scissors.";
        }
        else if (computerSelection === "paper") {
            pScore++;
            return "You win! Scissors beats paper.";
        }
    }
    else {
        return "Invalid input, please enter \"Rock, Paper, or Scissors\"";
    }
}

function game () {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, paper, or scissors?");
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("Score: ");
        console.log(`You: ${pScore}`);
        console.log(`Computer: ${cScore}`);
    }
    if (pScore > cScore) {
        return "You win!";
    }
    else if (pScore < cScore) {
        return "You lose!";
    }
    else if (pScore === cScore) {
        return "Tie game!";
    }
}

let pScore = 0;
let cScore = 0;

console.log(game());