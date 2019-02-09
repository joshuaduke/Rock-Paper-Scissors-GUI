var imgContainer = document.getElementById("images");
var imgList = document.querySelectorAll(".imgContainer");
var compImg = document.getElementById("compContainer");
var imgs = document.querySelectorAll("img");

var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");
var lizard = document.getElementById("lizard");
var spock = document.getElementById("spock");

var win = "Congrats you win";
var draw = "It's a draw";
var lose = "You Lose";

var playAgain = document.getElementById("play");
var gameMode = document.getElementById("gameMode");

var modalBtn = document.getElementById("modal");
var modal = document.getElementById("myModal");
var closeModal = document.getElementById("closeModal");

var playerSelection;
var computerSelection;

var userRes = document.getElementById("userScore");
var compRes = document.getElementById("compScore");
var userScore = 0;
var compScore = 0;

var winAud = document.getElementById("winAud");
var loseAud = document.getElementById("loseAud");
// var userSelection = "You chose: ";

// Computer Chooses a weapoon
function compChoice()
{
  var myArray = ["rock", "paper", "scissors", "lizard", "spock"];

  //Computer choose betwee 0 - 4
  let randomNum = Math.floor(Math.random() * (4 - 0 + 1) + 0);
  // Number is assigned to value in array
  return myArray[randomNum];
}

// Choose your weapon, Player's Choice
function game(playerSelection)
{
  const computerChoice = compChoice();
  //Display Computer's choice in the DOM
  compImg.innerHTML = "<img  src=images/" + computerChoice +".png>";
  
  console.log(computerChoice);
  console.log(playerSelection);
  console.log(playerSelection + computerChoice);
  
  //Display results did user win or lose?
  switch (playerSelection + computerChoice)
  {
    case "rockscissors":
    case "rocklizard":
    case "scissorslizard":
    case "scissorspaper":
    case "lizardspock":
    case "lizard paper":
    case "spockrock":
    case "spockscissors":
    case "paperspock":
    case "paperrock":
    //player Wins the round
      //increase score
      userScore++;
      userRes.textContent = userScore;
      //add winning sound
      winAud.play();

      function myWin()
      {
        endgame.innerHTML = "👍🏻👍👍🏼👍🏾👍🏿";
        myFunction();
        console.log(userScore);
      }
      myWin();

    break;

    //Round is tied
    case "rockrock":
    case "lizardlizard":
    case "scissorsscissors":
    case "paperpaper":
    case "spockspock":

    function tied()
    {
      endgame.innerHTML = "👔👔👔👔";
      myFunction();
    }
    tied();

    break;

    default:
    //Player Loses round
      //Increase pc score
      compScore++;
      compRes.textContent = compScore;
      //add losing sound
      loseAud.play();
      function myLose()
      {
        endgame.innerHTML = "👎🏻👎👎🏼👎🏾👎🏿";
        myFunction();
        console.log(userScore);
      }
      myLose();
  }
  endScore();
  //Best out of 5 then display winner
  
}
// while player 1 > player 2 or vice versa add 👀
function myFunction() 
  {
    myVar = setTimeout(function()
    { 
      if (userScore < 3 && compScore < 3)
      {
        endgame.innerHTML = "👀👀👀";
      } 
    }, 500);
  }

function endScore()
{
  if (userScore == 3)
  {
    endgame.innerHTML = "WINNER";
    endgame.style.fontSize = "200%";
    disableImgs();
    playAgain.classList.add("playAgain");

   } else if (compScore == 3)
   {
     endgame.innerHTML = "LOSER";
     endgame.style.fontSize = "200%";
     disableImgs();
     playAgain.classList.add("playAgain");
   }
   playAgain.classList.add("pointer");
}

function disableImgs()
{
  for(var i = 0; i < imgList.length; i++)
  {
    imgList[i].classList.add("disable");
    imgContainer.classList.remove("pointer");
  }
}

 //code play again button
playAgain.addEventListener("click", function()
{
  if (userScore >= 0 || compScore >= 0)
  {
    userScore = 0;
    compScore = 0;
    userRes.innerHTML = 0;
    compRes.innerHTML = 0;
  }
  endgame.innerHTML = "👀👀👀";
  endgame.style.fontSize = "200%";
  compImg.innerHTML =  "";
  playAgain.classList.remove("playAgain");

  for(var i = 0; i < imgList.length; i++)
  {
    imgList[i].classList.remove("disable");
    imgContainer.classList.add("pointer");
  }
});

function main()
{
  rock.addEventListener("click", function()
  {
    return game("rock");
  })
  paper.addEventListener("click", function()
  {
    game("paper");
  })
  scissors.addEventListener("click", function()
  {
    game("scissors");
  })
  lizard.addEventListener("click", function()
  {
    game("lizard");
  })
  spock.addEventListener("click", function()
  {
    game("spock");
  })
}

//add modal for rules
modalBtn.addEventListener("click", function()
{
  modal.style.display = "block";
})

closeModal.addEventListener("click", function(

){
  modal.style.display = "none";
});

  main();

