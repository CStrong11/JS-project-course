function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return `You Win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}.`;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 1; i <= 5; i++) {
    const playerSelection = prompt(
      `Round ${i}: Enter your choice (Rock, Paper, Scissors):`
    )
      .toLowerCase()
      .trim();
    const computerSelection = computerPlay().toLowerCase();
    const result = playRound(playerSelection, computerSelection);
    console.log(result);
    if (result.startsWith("You Win!")) {
      playerScore++;
    } else if (result.startsWith("You Lose!")) {
      computerScore++;
    }
  }
  if (playerScore > computerScore) {
    console.log(
      `You won the game! Final score: ${playerScore} - ${computerScore}`
    );
  } else if (playerScore < computerScore) {
    console.log(
      `You lost the game! Final score: ${playerScore} - ${computerScore}`
    );
  } else {
    console.log(`It's a tie! Final score: ${playerScore} - ${computerScore}`);
  }
}

game();
