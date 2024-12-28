function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
  const choice = prompt("Choose rock, paper or  scissors").toLowerCase();
  return choice;
}
function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const human = getHumanChoice();
    const computer = getComputerChoice();
    playRound(human, computer);
  }

  function playRound(humanChoice, computerChoice) {
    switch (humanChoice) {
      case "rock":
        if (computerChoice === "rock") {
          humanScore++;
          computerScore++;
          console.log("computer chose " + computerChoice);
          console.log("It's a tie!");
        } else if (computerChoice === "paper") {
          computerScore++;
          console.log("computer chose " + computerChoice);
          console.log("You Lose!");
        } else if (computerChoice === "scissors") {
          humanScore++;
          console.log("computer chose " + computerChoice);
          console.log("You Win!");
        }
        break;
      case "paper":
        if (computerChoice === "rock") {
          humanScore++;
          console.log("computer chose " + computerChoice);
          console.log("You Win!");
        } else if (computerChoice === "paper") {
          computerScore++;
          humanScore++;
          console.log("computer chose " + computerChoice);
          console.log("It's a tie!");
        } else if (computerChoice === "scissors") {
          computerScore++;
          console.log("computer chose " + computerChoice);
          console.log("You Lose!");
        }
        break;
      case "scissors":
        if (computerChoice === "rock") {
          computerScore++;
          console.log("computer chose " + computerChoice);
          console.log("You Lose!");
        } else if (computerChoice === "paper") {
          humanScore++;
          console.log("computer chose " + computerChoice);
          console.log("You Win!");
        } else if (computerChoice === "scissors") {
          humanScore++;
          computerScore++;
          console.log("computer chose " + computerChoice);
          console.log("It's a tie!");
        }
        break;
    }
  }

  console.log(
    "Total score: Human- " + humanScore + " Computer-" + computerScore
  );
}
playGame();
