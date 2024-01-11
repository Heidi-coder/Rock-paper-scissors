let computerChoice;
let playerChoice;
let result;
let playerScore = 0;
let computerScore = 0;
let scoring;

function getComputerChoice(){
  let computerNum = Math.random();
  if (computerNum < 1/3){
    computerChoice = "Rock";
    return computerChoice;
  }
  else if (computerNum >= 1/3 && computerNum < 2/3){
    computerChoice = "Paper";
    return computerChoice;
  }
  else {
    computerChoice = "Scissors";
    return computerChoice;
  }
}

function getPlayerChoice(){
  playerChoice = prompt("Rock, Paper, or Scissors?");

  function capitalize(string) {
    string = string.trim();
    string = string.toLowerCase();
    let letter1 = string.slice(0, 1);
    let therest = string.slice(1);
    letter1 = letter1.toUpperCase();
    return letter1 + therest;
  }
  
  playerChoice = capitalize(playerChoice);

  return playerChoice;
}

function play(playerSelection, computerSelection) {
  if (playerSelection === "Rock"){
    if (computerChoice === "Rock") {
      result = "Tie";
      return result;
    }
    else if (computerChoice === "Paper"){
      result = "Computer won!";
      return result;
    }
    else if (computerChoice === "Scissors"){
      result = "You Won! Good job!";
      return result;
    }
    else {
      result = "Sorry, something went wrong...";
      return result;
    }
  }
  else if (playerSelection === "Paper"){
    if (computerChoice === "Rock") {
      result = "You Won! Good job!";
      return result;
    }
    else if (computerChoice === "Paper"){
      result = "Tie";
      return result;
    }
    else if (computerChoice === "Scissors"){
      result = "Computer won!";
      return result;
    }
    else {
      result = "Sorry, something went wrong...";
      return result;
    }
  }
  else if (playerSelection === "Scissors"){
    if (computerChoice === "Rock") {
      result = "Computer won!";
      return result;
    }
    else if (computerChoice === "Paper"){
      result = "You Won! Good job!";
      return result;
    }
    else if (computerChoice === "Scissors"){
      result = "Tie";
      return result;
    }
    else {
      result = "Sorry, something went wrong...";
      return result;
    }
  }
  else {
    result = "Please make a valid selection :)";
    return result;
  }
}

function updatePlayerScore(thisResult, currentPlayerScore, currentComputerScore){
  if (thisResult === "You Won! Good job!"){
    playerScore = currentPlayerScore + 1;
    scoring = `Your score is ${currentPlayerScore}. Computer's score is ${currentComputerScore}.`;
  }
  else {
    scoring = `Your score is ${currentPlayerScore}. Computer's score is ${currentComputerScore}.`;
  }
}

function updateComputerScore(thisResult, currentPlayerScore, currentComputerScore){
  if (thisResult === "Computer won!"){
    computerScore = currentComputerScore + 1;
    scoring = `Your score is ${currentPlayerScore}. Computer's score is ${currentComputerScore}.`
  }
  else {
    scoring = `Your score is ${currentPlayerScore}. Computer's score is ${currentComputerScore}.`
  }
}

function gameOfFive(){
  getPlayerChoice();
  getComputerChoice();
  console.log(computerChoice);
  play(playerChoice, computerChoice);
  console.log(result);

  updateComputerScore(result, playerScore, computerScore);
  updatePlayerScore(result, playerScore, computerScore);
  console.log(scoring);




  getPlayerChoice();
  getComputerChoice();
  console.log(computerChoice);
  play(playerChoice, computerChoice);
  console.log(result);

  updateComputerScore(result, playerScore, computerScore);
  updatePlayerScore(result, playerScore, computerScore);
  console.log(scoring);




  getPlayerChoice();
  getComputerChoice();
  console.log(computerChoice);
  play(playerChoice, computerChoice);
  console.log(result);

  updateComputerScore(result, playerScore, computerScore);
  updatePlayerScore(result, playerScore, computerScore);
  console.log(scoring);




  getPlayerChoice();
  getComputerChoice();
  console.log(computerChoice);
  play(playerChoice, computerChoice);
  console.log(result);

  updateComputerScore(result, playerScore, computerScore);
  updatePlayerScore(result, playerScore, computerScore);
  console.log(scoring);




  getPlayerChoice();
  getComputerChoice();
  console.log(computerChoice);
  play(playerChoice, computerChoice);
  console.log(result);

  updateComputerScore(result, playerScore, computerScore);
  updatePlayerScore(result, playerScore, computerScore);
  console.log(scoring);
}

gameOfFive();