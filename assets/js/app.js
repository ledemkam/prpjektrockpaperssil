var userScore = 0;
var computerScore = 0;

document.getElementById('Rock').onclick = startRock;
document.getElementById('Paper').onclick = startPaper;
document.getElementById('Scissors').onclick = startScissors;
//const reSult = document.getElementById('reSult');



//asking name and age before playing
let playerName = window.prompt('Type your name');
let playerAge = window.prompt('type your age');

function startRock() {
  start("Rock");
}
function startPaper() {
  start("Paper");
}
function startScissors() {
  start("Scissors");
}

// function for rounds(game)
//input radio setting
function roundsGame() {
  let choiceRound = document.querySelector('input[type="radio"]:checked');
  const Sshow = document.getElementById('winnershow');
  const gamingScore = roundsGame();
  if (userScore === gamingScore.value * 1) {
    Sshow.innerHTML = "YOU WIN";

    document.getElementById('Rock').disabled = true;
    document.getElementById('Paper').disabled = true;
    document.getElementById('Scissors').disabled = true;
    return choiceRound;
  } else if (computerScore === gamingScore.value * 1) {
    Sshow.innerHTML = "COMP WIN";

    document.getElementById('Rock').disabled = true;
    document.getElementById('Paper').disabled = true;
    document.getElementById('Scissors').disabled = true;
    return choiceRound;
  }
  //return choiceRound;
}

// function for user and computer and startgame

function start(playerChoice) {

  computerChoice = computerOption();

  const myplayerchoice = document.getElementById(playerChoice);

  document.getElementById('reSult').innerHTML = "<p>You played <strong>" + playerChoice + "</strong>.The bot played <strong>" + computerChoice + "</strong>.</p>";

  if (playerChoice === 'Rock') {
    if (computerChoice === 'Rock') {
      document.getElementById('reSult').innerHTML += "<p>😐YOU TIED.😐 </p>";
      myplayerchoice.classList.add('buttonsgraw');
      setTimeout(() => myplayerchoice.classList.remove('buttonsgraw'), 850);
    } else if (computerChoice === 'Paper') {
      document.getElementById('reSult').innerHTML += "<p>😕YOU LOSE.😕 </p>";
      myplayerchoice.classList.add('buttonsgred');
      setTimeout(() => myplayerchoice.classList.remove('buttonsgred'), 850);
      computerScore++;
    } else if (computerChoice === 'Scissors') {
      document.getElementById('reSult').innerHTML += "<p>Congratulations:🔥YOU WIN!🚀 </p>";
      myplayerchoice.classList.add('buttonsgreen');
      setTimeout(() => myplayerchoice.classList.remove('buttonsgreen'), 850);

      userScore++;
    }
  } else if (computerChoice === 'Paper') {
    if (computerChoice === 'Rock') {
      document.getElementById('reSult').innerHTML += "<p> Congratulations: 🔥YOU WIN!🚀 </p>";
      myplayerchoice.classList.add('buttonsgreen');
      setTimeout(() => myplayerchoice.classList.remove('buttonsgreen'), 850);
      userScore++;
    } else if (computerChoice === 'Paper') {
      document.getElementById('reSult').innerHTML += "<p>😐YOU TIED.😐 </p>";
      myplayerchoice.classList.add('buttonsgraw');
      setTimeout(() => myplayerchoice.classList.remove('buttonsgraw'), 850);
    } else if (computerChoice === 'Scissors') {
      document.getElementById('reSult').innerHTML += "<p>😕YOU LOSE.😕 </p>";
      myplayerchoice.classList.add('buttonsgred');
      setTimeout(() => myplayerchoice.classList.remove('buttonsgred'), 850);
      computerScore++;
    }
  } else if (playerChoice === 'Scissors') {
    if (computerChoice == 'Rock') {
      document.getElementById('reSult').innerHTML += "<p>😕YOU LOSE.😕 </p>";
      myplayerchoice.classList.add('buttonsgred');
      setTimeout(() => myplayerchoice.classList.remove('buttonsgred'), 850);
      computerScore++;
    } else if (computerChoice === 'Paper') {
      document.getElementById('reSult').innerHTML += "<p>Congratulations:🔥YOU WIN!🚀 </p>";
      myplayerchoice.classList.add('buttonsgreen');
      setTimeout(() => myplayerchoice.classList.remove('buttonsgreen'), 850);
      userScore++;
    } else if (computerChoice === 'Scissors') {
      document.getElementById('reSult').innerHTML += "<p>😐YOU TIED.😐 </p>";
      myplayerchoice.classList.add('buttonsgraw');
      setTimeout(() => myplayerchoice.classList.remove('buttonsgraw'), 850);
    }
  }

  document.getElementById('userScore').innerHTML = userScore;
  document.getElementById('computerScore').innerHTML = computerScore;

}

// mathfloor method for rounding.

function computerOption() {
  var possiblechoice = ['Rock', 'Paper', 'Scissors'];
  var randomComputerChoice = possiblechoice[Math.floor(Math.random() * possiblechoice.length)];
  return randomComputerChoice;
}
// function for refresh after endgame(round)
document.getElementById("refresh").addEventListener("click", function () {
  window.location.reload();
})



