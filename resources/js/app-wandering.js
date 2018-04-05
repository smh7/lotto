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

  // populateButtons()
  // for(i = 0; i < winningNumbers.length; i++){
  setInterval(populateButtons,9000); 
    // for(i=0; i=6; i++){
    //   setTimeout(populateButtons,2000);

    });

  
    // populateButtons()
    // $('#btn-0').hide().delay(3000).fadeIn(2200);
  // }
  // btnPBUI.innerHTML = powerBall.toString();
  
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
  
    // switch (i){
        
  //   case 0: btn0UI.innerHTML = winningNumbers[0].toString();
  //   break;
 
  //   case 1: btn1UI.innerHTML = winningNumbers[1].toString();
  //   break;
 
  //   case 2: btn2UI.innerHTML = winningNumbers[2].toString()
  //   break;
 
  //   case 3:  btn3UI.innerHTML = winningNumbers[3].toString();
  //   break;
 
  //   case 4: btn4UI.innerHTML = winningNumbers[4].toString();
  //   break;

  //   case 5: btnPBUI.innerHTML = powerBall.toString();
  //   break;

  // }
    
  // setTimeout(UI
  // function UI1(){
  //   delay(3000).hide().delay(6000).fadeIn(2200);
  // }
  // setTimeout(UI2, 2000);
  // function UI2(){
  //   .delay(3000).hide().delay(9000).fadeIn(2200);
  // }
  // setTimeout(UI3, 2000);
  // function UI3(){
  //   btn3UI.innerHTML = winningNumbers[3].toString().delay(3000).hide().delay(12000).fadeIn(2200);
  // }
  // setTimeout(UI4, 2000);
  // function UI4(){
  //   btn4UI.innerHTML = winningNumbers[4].toString().delay(3000).hide().delay(15000).fadeIn(2200);
  // }
  // setTimeout(UIPB, 2000);
  // function UIPB(){
  //   btnPBUI.innerHTML = powerBall.toString().delay(3000).hide().delay(18000).fadeIn(2200);

    // $(document).ready(function() {
    //   $('#mybut')

    //   setTimeout(UI0, 2000);
    //   function UI0(){
    //     btn0UI.innerHTML = winningNumbers[0].toString();
    //     this.delay(3000)
    //   }
    //   setTimeout(UI1, 2000);
    //   function UI1(){
    //     btn1UI.innerHTML = winningNumbers[1].toString();
    //   }
    //   setTimeout(UI2, 2000);
    //   function UI2(){
    //     btn2UI.innerHTML = winningNumbers[2].toString();
    //   }
    //   setTimeout(UI3, 2000);
    //   function UI3(){
    //     btn3UI.innerHTML = winningNumbers[3].toString();
    //   }
    //   setTimeout(UI4, 2000);
    //   function UI4(){
    //     btn4UI.innerHTML = winningNumbers[4].toString();
    //   }
    //   setTimeout(UIPB, 2000);
    //   function UIPB(){
    //     btnPBUI.innerHTML = powerBall.toString();
    
    //     $(document).ready(function() {
    //       $('#mybut')
  // setTimeout(function(){btn1UI.innerHTML = winningNumbers[1].toString();}, 2000);
  // setTimer(function(){btn2UI.innerHTML = winningNumbers[2].toString();}, 2000);
  // setTimer(function(){btn3UI.innerHTML = winningNumbers[3].toString();}, 2000);
  // setTimer(function(){btn4UI.innerHTML = winningNumbers[4].toString();}, 2000);
  // setTimer(function(){btnPBUI.innerHTML = powerBall.toString();}, 2000);
  
 
  // btn1UI.innerHTML = winningNumbers[1].toString();

 
  // btn2UI.innerHTML = winningNumbers[2].toString();

 
  // btn3UI.innerHTML = winningNumbers[3].toString();

 
  // btn4UI.innerHTML = winningNumbers[4].toString();
  // buttonsPopulated = true;
  // if(buttonsPopulated){
  //   clearInterval(letterDispalyUI)
  // }
 
  // $('#btn-0').text = winningNumbers[0].toString();
  
  // console.log(winningNumbers[0].toString())
  // .text = winningNumbers[1].toString();
  // // setInterval(2000);
  // $('#btn-2').text = winningNumbers[2].toString();
  // // setInterval(2000);
  // $('#btn-3').text = winningNumbers[3].toString();
  // // setInterval(2000);
  // $('#btn-4').text = winningNumbers[4].toString();
  // // setInterval(2000);
  // $('#btn-pb').text = powerBall.toString();
  // // setInterval(2000);
  // buttonsPopulated = true;
