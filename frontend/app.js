const rock = "rock";
const scissors = "scissors";
const paper = "paper";
const gameElements = [rock, paper, scissors];
const restartButton = document.getElementById("restartButton");
const computerValue = document.getElementById('computerValue');
const playerValue = document.getElementById('playerValue');

let computerScore = 0;
let playerScore = 0;
let roundCount = 0;


const gameItems = document.querySelectorAll('.gameItem');
gameItems.forEach(item => {
    item.addEventListener('click', () => {
        if (playerScore < 30 && computerScore < 30) {
            console.log("Player: " + item.alt);
            const computerSelection = computerPlay();
            console.log("Computer: " + computerSelection);
            
            const roundResult = determineRoundResult(item.alt, computerSelection);
            updateScore(roundResult);
            roundCount++;
        } else {
            if (playerScore === 30) {
                console.log("Игрок победил игру!");
            } else if (computerScore === 30) {
                console.log("Компьютер победил игру!");
            }
        }
    });
});

function computerPlay() {
    const i = Math.floor(Math.random() * 3);
    return gameElements[i];
}

function determineRoundResult(playerSelection, computerSelection) {
    if (playerScore < 30 && computerScore < 30) {
        if (playerSelection === computerSelection) {
            return "tie";
        } else if ((playerSelection === rock && computerSelection === scissors) ||
                   (playerSelection === paper && computerSelection === rock) ||
                   (playerSelection === scissors && computerSelection === paper)) {
            return "player";
        } else {
            return "computer";
        }
    } else {
        return "gameOver";
    }
}

function updateScore(roundResult) {
    if (playerScore < 30 && computerScore < 30) {
        const roundResultElement = document.querySelector('.round span');
      
        if (roundResult === "player") {
            playerScore++;
            playerValue.textContent = playerScore;
            roundResultElement.textContent = "Игрок победил!";
            roundResultElement.classList.remove('red', 'yellow');
            roundResultElement.classList.add('green');
        } else if (roundResult === "computer") {
            computerScore++;
            computerValue.textContent = computerScore;
            roundResultElement.textContent = "Компьютер победил!";
            roundResultElement.classList.remove('green', 'yellow');
            roundResultElement.classList.add('red');
        } else {
            roundResultElement.textContent = "Ничья!";
            roundResultElement.classList.remove('green', 'red');
            roundResultElement.classList.add('yellow');
        }
    }
}


function restartGame() {
    computerScore = 0;
    playerScore = 0;
    computerValue.textContent = "0";
    playerValue.textContent = "0";
    roundCount = 0;
    console.log("Game restarted!");
}

restartButton.addEventListener("click", restartGame);
