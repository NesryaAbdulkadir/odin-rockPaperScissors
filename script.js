let humanScore = 0;
let computerScore = 0;

const DomResult = document.querySelector(".result");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const finalResult = document.querySelector(".final-result");
const roundsLeft = document.querySelector("#roundsLeft");
const header = document.querySelector(".header");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}
let results = [];
let round = 5;

rock.addEventListener("click", () => {
  playRound("rock");
});

paper.addEventListener("click", () => {
  playRound("paper");
});

scissors.addEventListener("click", () => {
  playRound("scissors");
});

function playRound(humanChoice) {
  if (round > 0) {
    const computerChoice = getComputerChoice();
    results.push(
      "You Chose " + humanChoice + " and computer chose " + computerChoice
    );
    if (humanChoice === computerChoice) {
      results.push(
        `It's a tie! You chose ${humanChoice} and computer chose ${computerChoice}`
      );
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "rock")
    ) {
      humanScore++;
      results.push(
        `You win! You chose ${humanChoice} and computer chose ${computerChoice}`
      );
    } else {
      computerScore++;
      results.push(
        `You lose. You chose ${humanChoice} and computer chose ${computerChoice}`
      );
    }

    round--;
    roundsLeft.innerText = round;
    displayResults();
  } else {
    console.log("Game over");

    const resultButton = document.createElement("button");
    const startButton = document.createElement("button");
    resultButton.innerText = "See Results";
    startButton.innerText = "Start Again";
    header.appendChild(resultButton);
    header.appendChild(startButton);
    rock.style.display = "none";
    paper.style.display = "none";
    scissors.style.display = "none";
    resultButton.addEventListener("click", () => {
      DomResult.innerText =
        "Game over! Final score: Human- " +
        humanScore +
        " Computer-" +
        computerScore;
    });

    startButton.addEventListener("click", () => {
      window.location.reload();
    });
  }
}

function displayResults() {
  if (results.length === 0) {
    DomResult.innerText = "You haven't played yet";
  } else {
    const resultLi = document.createElement("li");
    results.forEach((result) => {
      resultLi.innerText = result;
      DomResult.appendChild(resultLi);
    });
  }
}
