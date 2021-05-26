var userScore = 0;
var computerScore = 0;

//asking name 

  var person = window.prompt("Please enter your name:");
  alert('welcome');

// function for rounds(game)
//input radio setting
var roundCount = 0;
var selectedRound = document.querySelector('input[name="round"]:checked').value;

var roundCountText = document.querySelector('.roundcount').textContent;

if (roundCountText.charAt(0) != undefined && (parseInt(roundCountText.charAt(0)) <= selectedRound)) {
  document.querySelector('.gamesend').classList.remove('hidden');
  document.getElementById('Rock').onclick = startRock;
  document.getElementById('Paper').onclick = startPaper;
  document.getElementById('Scissors').onclick = startScissors;
}
else {
  document.getElementById('Rock').onclick = startRock;
  document.getElementById('Paper').onclick = startPaper;
  document.getElementById('Scissors').onclick = startScissors;


  document.querySelector('.gamesend').classList.add('hidden');

}



function startRock() {
  start("Rock");
}
function startPaper() {
  start("Paper");
}
function startScissors() {
  start("Scissors");
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
    roundCount++;

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
    roundCount++;
    
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
    roundCount++;
  }

  document.getElementById('userScore').innerHTML = userScore;
  document.getElementById('computerScore').innerHTML = computerScore;

  if (roundCount <= selectedRound) {
    document.querySelector('.roundcountselect').classList.add('hidden');
    document.querySelector('.roundcount').classList.remove('hidden');
    document.querySelector('.roundcount').innerHTML = roundCount + ' / ' + selectedRound;
  }
  else {
    document.querySelector('.roundcountselect').classList.remove('hidden');
    document.querySelector('.roundcount').classList.add('hidden');
  }


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



