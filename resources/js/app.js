/*
GAME FUNCTION
- Lottery Numbers start to generate 5 seconds after load of page
- lotto numbers will show on the UI every 2 seconds 
*/

// Game Values
let winningNumbers = [];
let powerBall = 0;
// flag that buttons are not populated
let buttonsPopulated = false;

// UI Elements
const game = document.querySelector('#game'),
      gameStart = document.querySelector('#start-game-btn'),
      message = document.querySelector('#special-message'),
      btnGrp = document.querySelectorAll('.btn'),
      btn0UI = document.querySelector('#btn-0'),
      btn1UI = document.querySelector('#btn-1'),
      btn2UI = document.querySelector('#btn-2'),
      btn3UI = document.querySelector('#btn-3'),
      btn4UI = document.querySelector('#btn-4'),
      btnPBUI = document.querySelector('#btn-pb');
      

// Start Game
$(document).ready(function() {
  generateWinningNumbers();

  // populateButtons but wait for a bit before
  setInterval(populateButtons, 5000); 


    });

  // Generate Winning Numbers and PowerBall Number
function generateWinningNumbers (){
  do { 
    var temp = Math.floor((Math.random() * 39) + 1)
    if(winningNumbers.includes(temp) !== true){
      winningNumbers.push(temp);
      winningNumbers.sort(function(a, b){return a-b});
    }
  }
  
  while (winningNumbers.length < 6);
  // Get PowerBall from winningNumbers
  powerBall = winningNumbers[Math.floor(Math.random() * winningNumbers.length)];
  console.log(winningNumbers);
  console.log("power ball is " + powerBall);
  
  // Remove powerBall from winningNumbers
  let indexPowerBall = winningNumbers.indexOf(powerBall);
  console.log("index of powerBall is " + indexPowerBall);
  if (indexPowerBall > -1) {
    winningNumbers.splice(indexPowerBall, 1);
  }
  console.log("winning Numbers are " + winningNumbers);
  
}

function populateButtons() {

        
     btn0UI.innerHTML = winningNumbers[0].toString();
 
     btn1UI.innerHTML = winningNumbers[1].toString();
 
     btn2UI.innerHTML = winningNumbers[2].toString()
 
      btn3UI.innerHTML = winningNumbers[3].toString();
 
     btn4UI.innerHTML = winningNumbers[4].toString();

     btnPBUI.innerHTML = powerBall.toString();

  }
  
  