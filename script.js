function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  const options = ["rock", "paper", "scissors"];
  if (!playerSelection || playerSelection.toLowerCase().trim() === "") {
    return "Invalid selection. Please choose Rock, Paper, or Scissors.";
  }
  if (!options.includes(playerSelection)) {
    return `Invalid selection. "${playerSelection}" is not a valid option. Please choose Rock, Paper, or Scissors.`;
  }
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

function playerChoice(i) {
  const playerSelection = prompt(
    `Round ${i}: Enter your choice (Rock, Paper, Scissors):`
  );
  return playerSelection.toLowerCase().trim();
}

function game() {
  alert(
    `Welcome to the game of rock-scissors-paper, you will play 5 round against the computer. type your choice and let have fun!`
  );
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 1; i <= 5; i++) {
    const computerSelection = computerPlay().toLowerCase();
    const playerSelection = playerChoice(i);
    const result = playRound(playerSelection, computerSelection);
    console.log(result);
    if (playerSelection === null) {
      const shouldExit = confirm("Are you sure you want to exit the game?");

      if (shouldExit) {
        alert("Thanks for playing!");
        return;
      } else {
        i--;
        continue;
      }
    }
    if (result.startsWith("You Win!")) {
      playerScore++;
    } else if (result.startsWith("You Lose!")) {
      computerScore++;
    } else if (result.startsWith("It's a tie!")) {
      continue;
    } else {
      i--;
    }
  }
  finalScore(playerScore, computerScore);
}

function finalScore(playerScore, computerScore) {
  if (playerScore > computerScore) {
    alert(`You won the game! Final score: ${playerScore} - ${computerScore}`);
  } else if (playerScore < computerScore) {
    alert(`You lost the game! Final score: ${playerScore} - ${computerScore}`);
  } else {
    alert(`It's a tie! Final score: ${playerScore} - ${computerScore}`);
  }
}
game();
