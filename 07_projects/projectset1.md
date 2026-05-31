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