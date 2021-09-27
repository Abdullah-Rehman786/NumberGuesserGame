let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


// Write your code below:
const generateTarget = () => Math.floor(Math.random()*10);

const compareGuesses = (hGuess, cGuess, targetNum) => {
  if (Math.abs(hGuess-targetNum) === Math.abs(cGuess-targetNum)) {
      console.log('true');
      return true;
  } else if (Math.abs(hGuess-targetNum) < Math.abs(cGuess-targetNum)){
      console.log('true');
      return true;
  } else if (Math.abs(hGuess-targetNum) > Math.abs(cGuess-targetNum)) {
    console.log('false');
      return false;
  }
  
}

const updateScore = winner => {
    switch(winner){
      case 'human':
        humanScore++;
        break;
      case 'computer':
        computerScore++;
        break;
      default:
        break;
    }
  }

const advanceRound = () => {
  currentRoundNumber++;
}

// compareGuesses(hGuess, cGuess, targetNum);
// updateScore('human');
// advanceRound();