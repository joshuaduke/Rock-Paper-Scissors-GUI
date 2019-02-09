var userChoice; 
function message(){

    userChoice = prompt("Choose Rock Paper or Scissors: ");;

    if (userChoice == null || userChoice == ""){

      alert("You must enter a value to continue");
      userChoice = prompt("Choose Rock Paper or Scissors: ");

  } else {
    userChoice = userChoice.toLowerCase();
  }
}

var choices = ["rock", "paper", "scissors"];
var computerChoice = "The computer selected: ";

var win = "Congrats you win";
var draw = "It's a draw";
var lose = "You Lose";

let playerSelection;
let computerSelection;

var user = document.getElementById("userRes");
var userScore = 0; 
var comp = document.getElementById("compRes");
var compScore = 0;
var endgame = document.getElementById("endgame");

//User choose Rock Paper or Scissors
var userSelection = "You have selected: "

function game(){

  message();
  
  //get random number from 0-2 and return the value
  function computerPlay(){
    
    //Computer Choose Rock Paper or Scissors
    let randomNum = Math.floor(Math.random() * (2 - 0 + 1) + 0);
    return choices[randomNum];
  }

  // rock paper scissors rules
  function playRound(playerSelection, computerSelection) 
  {

    if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper"){
      
      return win;

    } else if (playerSelection == "paper" && computerSelection == "paper" || playerSelection == "rock" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "scissors"){
      
      return draw;

    } else if (playerSelection == "rock" && computerSelection == "paper" || playerSelection == "scissors" && computerSelection == "rock" || playerSelection == "paper" && computerSelection == "scissors") {
      
    return lose;
    }
  }
  playerSelection = userChoice;
  computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));
  console.log(userSelection + playerSelection);
  console.log(computerChoice + computerSelection);

  if (playRound(playerSelection, computerSelection) == win) {
    userScore++;
    user.textContent = userScore;
  } else if (playRound(playerSelection, computerSelection) == lose){
    compScore++;
    comp.textContent = compScore;
  }

    //when player wins add +1 to player score

}

var button = document.getElementById("play");
button.addEventListener("click", function(){
  var games = 5;
  for (var i = 0; i < games; i++){
    game();
  }
  if (userScore > compScore){
    
   endgame.innerHTML = "You won Congrats!!";
  
  } else if (user == compScore){
    endgame.innerHTML = "The game is tied ouuuu!";
    

  } else {
    endgame.innerHTML = "You Lost Try Again!";
  }
})


//add an option for best out of 5 or best out of 3
