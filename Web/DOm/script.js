console.log('hi')
let titleDiv = document.getElementById('title')
console.log(titleDiv)
console.log(titleDiv.innerText)
let message = 'Bbye its me '
titleDiv.innerHTML=`<p> ${message}</p>`
titleDiv.style.backgroundColor='red'

let redDiv= document.getElementById('red')
let yellowDiv= document.getElementById('yellow')
let greenDiv= document.getElementById('green')

// redDiv.onclick = ()=>console.log('Red clicked')
// yellowDiv.onclick = ()=>console.log('Yellow clicked')
// greenDiv.onclick = ()=>console.log('Green clicked')

const squares = document.querySelectorAll('.colorSquare')
const timesClicked = {'red': 0, 'yellow': 0, 'green': 0}
squares.forEach(square => {
  square.onclick = () => {
    timesClicked[square.value] += 1
    square.innerText = timesClicked[square.value]
  }
})

function clearScores(){
    timesClicked.red=0
    timesClicked.yellow=0
    timesClicked.green=0
    squares.forEach(square=>{
        square.innerText=''
    })
}

const clearGameBtn = document.getElementById('clearGame')

clearGameBtn.onclick=()=>clearScores()