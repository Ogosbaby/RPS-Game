const rpsBtns = document.querySelectorAll('main button');
const scoreDiv = document.getElementById('score')
const resultDiv = document.getElementById('result')
const descDiv = document.getElementById('desc')
let playerScore = 0
let computerScore = 0
const endGameBtn = document.getElementById('endGameBtn')

const choices = ['rock', 'paper', 'scissors']
const getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }
    const wins = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
}
return wins[playerSelection] === computerSelection ? "You win!" : "You lose!";
}
const showResult = (result, playerSelection, computerSelection) => {
    if (result === "You win!") {
        playerScore++;
    } else if (result === "You lose!") {
        computerScore++;
    }
   else if (result === "It's a tie!") {
        playerScore += 0;
        computerScore += 0;
   }

    scoreDiv.innerHTML = `Player: ${playerScore} - Computer: ${computerScore}`;
    resultDiv.innerHTML = result;
    descDiv.innerHTML = `You chose ${playerSelection}, computer chose ${computerSelection}.`;
}

const handleClick = (e) => {
    const playerSelection = e.target.value;
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    showResult(result, playerSelection, computerSelection);
}
rpsBtns.forEach(btn => {
    btn.addEventListener('click', handleClick);
});
endGameBtn.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    scoreDiv.innerHTML = '';
    resultDiv.innerHTML = '';
    descDiv.innerHTML = '';
});

