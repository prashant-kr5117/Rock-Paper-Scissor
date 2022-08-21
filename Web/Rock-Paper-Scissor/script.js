const totalScore = {playerScore:0,computerScore:0}

function getComputerChoice() {
  let choice = ['Rock','Paper','Scissors']
  let computerChoice= Math.floor(Math.random()*3)
  return choice[computerChoice]
}

function getResult(playerChoice, computerChoice) {

  let score;
  if(playerChoice==computerChoice) score=0;
  else if(playerChoice=='Rock' && computerChoice=='Scissors') score=1
  else if(playerChoice=='Scissors' && computerChoice == 'Paper') score=1
  else if(playerChoice = 'Paper' && computerChoice=='Rock') score =1
  else score =-1;
  return score;
}

function showResult(score, playerChoice, computerChoice) {
  
 const resultDiv = document.getElementById('result')
 const handsDiv = document.getElementById('hands')
 const playerScoreDiv = document.getElementById('player-score')

  // // Hint: on a score of -1
  // if(score == -1) resultDiv.innerText ='You Lose!'
  // // Don't forget to grab the div with the 'result' id!
  // else if(score == 0) resultDiv.innerText = "It's a tie!"
  // else resultDiv.innerText = 'You Won!'
  switch (score) {
    case -1:
      resultDiv.innerText ='You Lose!'
      break;
    case 0:
    resultDiv.innerText = "It's a tie"
      break;
    case 1:
      resultDiv.innerText = "You Won!"
  }
  handsDiv.innerText = `👦 ${playerChoice} vs 🤖 ${computerChoice}`
  playerScoreDiv.innerText =`Your Score: ${ totalScore['playerScore']}`
}

// ** Calculate who won and show it on the screen **  
function onClickRPS(playerChoice) {
  console.log({playerChoice})
  const computerChoice = getComputerChoice()
  console.log({computerChoice})

  const score = getResult(playerChoice,computerChoice)
  totalScore['playerScore']+=score
  console.log({score})
  console.log(totalScore)
  showResult(score,playerChoice,computerChoice)
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
    const rpsButtons = document.querySelectorAll('.rpsButton')
    console.log(rpsButtons)

     rpsButtons.forEach(rpsButton=>{
      rpsButton.onclick=()=> onClickRPS(rpsButton.value)
     })
 const endGameButton = document.getElementById('endGameButton')
 endGameButton.onclick=()=>endGame(totalScore)

  // Add a click listener to the end game button that runs the endGame() function on click
  
}

// ** endGame function clears all the text on the DOM **
function endGame(totalScore) {
  const resultDiv = document.getElementById('result')
  const handsDiv = document.getElementById('hands')
  const playerScoreDiv = document.getElementById('player-score')
 
  totalScore['playerScore'] = 0
  totalScore['computerScore'] = 0

 
 resultDiv.innerText = ''
 handsDiv.innerText = ''
 playerScoreDiv.innerText = ''
}

playGame()