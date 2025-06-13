let playerScore = 0;
let computerScore = 0;

function getComputerMove() {
  const moves = ['rock', 'paper', 'scissors'];
  return moves[Math.floor(Math.random() * moves.length)];
}

function playGame(playerMove) {
  const computerMove = getComputerMove();
  const resultText = document.getElementById("resultText");

  let resultMessage = `🧑 You chose <strong>${playerMove}</strong><br>🤖 Computer chose <strong>${computerMove}</strong><br>`;

  if (playerMove === computerMove) {
    resultMessage += "It's a tie! 🤝";
  } else if (
    (playerMove === 'rock' && computerMove === 'scissors') ||
    (playerMove === 'paper' && computerMove === 'rock') ||
    (playerMove === 'scissors' && computerMove === 'paper')
  ) {
    resultMessage += "You win! 🎉";
    playerScore++;
  } else {
    resultMessage += "You lose! 💀";
    computerScore++;
  }

  resultText.innerHTML = resultMessage;
  document.getElementById("playerScore").textContent = playerScore;
  document.getElementById("computerScore").textContent = computerScore;
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  document.getElementById("playerScore").textContent = "0";
  document.getElementById("computerScore").textContent = "0";
  document.getElementById("resultText").textContent = "Choose your move!";
}
