var userScore = 0;
var computerScore = 0;
document.getElementById('Rock').onclick = startRock;
document.getElementById('Paper').onclick = startPaper;
document.getElementById('Scissors').onclick = startScissors;
//asking name 

var name = window.prompt("Hi there!, What is your name?");




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

  document.getElementById('reSult').innerHTML = "<p>you played <strong>" + playerChoice + "</strong>.computer played <strong>" + computerChoice + "</strong>.</p>";
  document.getElementById("reSult").style.color = "#DA70D6";

  if (playerChoice === 'Rock') {
    if (computerChoice === 'Rock') {
      document.getElementById('reSult').innerHTML += "<p>😐YOU TIED.😐 </p>";
      document.getElementById("reSult").style.color = "#696969";
      myplayerchoice.classList.add('button_graw');
      setTimeout(() => myplayerchoice.classList.remove('button_graw'), 1000);
    } else if (computerChoice === 'Paper') {
      document.getElementById('reSult').innerHTML += "<p>😕YOU LOSE.😕 </p>";
      document.getElementById("reSult").style.color = "#B22222";
      myplayerchoice.classList.add('button_red');
      setTimeout(() => myplayerchoice.classList.remove('button_red'), 1000);

      computerScore++;
    } else if (computerChoice === 'Scissors') {
      document.getElementById('reSult').innerHTML += "<p>Congratulations:🔥YOU WIN!🚀 </p>";
      document.getElementById("reSult").style.color = "#228B22";
      myplayerchoice.classList.add('button_green');
      setTimeout(() => myplayerchoice.classList.remove('button_green'), 1000);

      userScore++;
    }
  } else if (computerChoice === 'Paper') {
    if (computerChoice === 'Rock') {
      document.getElementById('reSult').innerHTML += "<p> Congratulations: 🔥YOU WIN!🚀 </p>";
      document.getElementById("reSult").style.color = "#228B22";
      myplayerchoice.classList.add('button_green');
      setTimeout(() => myplayerchoice.classList.remove('button_green'), 1000);
      userScore++;
    } else if (computerChoice === 'Paper') {
      document.getElementById('reSult').innerHTML += "<p>😐YOU TIED.😐 </p>";
      document.getElementById("reSult").style.color = "#696969";
      myplayerchoice.classList.add('button_graw');
      setTimeout(() => myplayerchoice.classList.remove('button_graw'), 1000);
    } else if (computerChoice === 'Scissors') {
      document.getElementById('reSult').innerHTML += "<p>😕YOU LOSE.😕 </p>";
      document.getElementById("reSult").style.color = "#B22222";
      myplayerchoice.classList.add('button_red');
      setTimeout(() => myplayerchoice.classList.remove('button_gred'), 1000);
      computerScore++;
    }
  } else if (playerChoice === 'Scissors') {
    if (computerChoice == 'Rock') {
      document.getElementById('reSult').innerHTML += "<p>😕YOU LOSE.😕 </p>";
      document.getElementById("reSult").style.color = "#B22222";
      myplayerchoice.classList.add('button_red');
      setTimeout(() => myplayerchoice.classList.remove('button_red'), 1000);
      computerScore++;
    } else if (computerChoice === 'Paper') {
      document.getElementById('reSult').innerHTML += "<p>Congratulations:🔥YOU WIN!🚀 </p>";
      document.getElementById("reSult").style.color = "#228B22";
      myplayerchoice.classList.add('button_nagreen');
      setTimeout(() => myplayerchoice.classList.remove('button_green'), 1000);
      userScore++;
    } else if (computerChoice === 'Scissors') {
      document.getElementById('reSult').innerHTML += "<p>😐YOU TIED.😐 </p>";
      document.getElementById("reSult").style.color = "#696969";
      myplayerchoice.classList.add('button_graw');
      setTimeout(() => myplayerchoice.classList.remove('button_graw'), 1000);
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



