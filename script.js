let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  //gen new secret target number between 0 and 9
  return Math.floor(Math.random()*10);
};

const compareGuesses = (human, computer, target) => {
  let humanDiff = Math.Abs(humanDiff-target);
  let computerDiff = Math.Abs(humanDiff-target);
  let humanWon = false;
  if (humanDiff < computerDiff) {
    humanWon = true;
  } else if (humanDiff > computerDiff) {
    humanWon = false;
  } else {
    humanWon = true; //if tie, human wins. 
  }

  return humanWon;
};

const updateScore = (winner) => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
};

const advanceRound = () => {
  currentRoundNumber++;
};

