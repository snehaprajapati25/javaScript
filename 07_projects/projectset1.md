# Projects related to DOM

## Project Link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code 

## Project 1 (Color Changer)

```javascript
// console.log("sneha")

const buttons = document.querySelectorAll('.button');
// console.log(buttons);
const body = document.querySelector('body');

buttons.forEach(function(button){
  console.log(button)

  button.addEventListener('click', function(e){
    console.log(e)
    console.log(e.target)

    if(e.target.id == 'grey'){
      body.style.backgroundColor = e.target.id;
    }else if(e.target.id == 'white'){
      body.style.backgroundColor = e.target.id;
    }else if(e.target.id == 'blue'){
      body.style.backgroundColor = e.target.id;
    }else if(e.target.id == 'yellow'){
      body.style.backgroundColor = e.target.id;
    }else if(e.target.id == 'purple'){
      body.style.backgroundColor = e.target.id;
    }
  })
})
```


## Project 2 (BMI Calculator)

```javascript
const form = document.querySelector('form');
//this usecase will give u empty results
// const height = parseInt(document.querySelector("#height").value);

form.addEventListener('submit', function(e){
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);

  const weight = parseInt(document.querySelector("#weight").value);

  const result = document.querySelector('#results');

  if(height<0 || isNaN(height)){
    result.innerHTML = 'Please give a valid height';
  }else if(weight<0 || isNaN(weight)){
    result.innerHTML = 'Please give a valid weight';
  }else{
    const bmi = (weight/((height*height)/10000)).toFixed(2);

    if(bmi<18.6){
      result.innerHTML = `<span>Your BMI is ${bmi} (UnderWeight) </span>`
    }else if(bmi>=18.6 && bmi<24.9){
      result.innerHTML = `<span>Your BMI is ${bmi} (Normal Range) </span>`
    }else{
      result.innerHTML = `<span>Your BMI is ${bmi} (Over Weight) </span>`
    }
  }
})
```


## Project 3 (Digital Clock)

```javaScript
const clock = document.getElementById('clock')

//setInterval() is used because a clock needs to update continuously.

setInterval(function(){
  let date = new Date()
// console.log(date.toLocaleString())
clock.innerHTML = date.toLocaleString()
}, 1000)
```


## Project 4


```javascript
let randomNumber = parseInt(Math.random()*100 +1); //it will not give 0 on adding 1
console.log(randomNumber)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaing = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

//if i am available to play game
if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value)
    console.log(guess)
    validateGuess(guess)
  })
}

function validateGuess(guess){
  //it will check whether the no is valid no or not or not greater than 1 but less 100

  if(isNaN(guess)){
    alert('Please enter a valid number')
  }else if(guess<1){
    alert('Please enter a number grater than 1')
  }else if(guess>100){
    alert('Please enter a number less than 100')
  }else{
    prevGuess.push(guess)
    if(numGuess === 10){
      displayGuess(guess)
      displayMessage(`Game Over. Random number was ${randomNumber}`)
      endGame()
    }else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage(`You guessed it right`)
    endGame()
  }else if(guess < randomNumber){
    displayMessage(`Number is TOOO low`)
  }else if(guess > randomNumber){
    displayMessage(`Number is TOOO high`)
  }
}

function displayGuess(guess){
  userInput.value = ''
  guessSlot.innerHTML += `${guess}, `
  remaing.innerHTML = `${10 - numGuess}`
  numGuess++
}

function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
  userInput.value = ''
  userInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p)
  playGame = false
  newGame()
}

function newGame(){
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random()*100 +1);
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML = ''
    remaing.innerHTML = `${10 - numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true
  })
}
```