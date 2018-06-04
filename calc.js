let firstValue = [];
let secondValue;
let operation;

function init() {
  let buttons = document.querySelectorAll('.button');
  buttons.forEach(function(btn) {
    btn.addEventListener('click', numberDisplay);
  });
}

function numberDisplay(event) {
  let pressed = event.target.innerText;
  //If the button pushed is a number, that digit is added to the current input
  if (!isNaN(pressed)){
    firstValue.push(event.target.innerText);
    let currentValue = firstValue.join('');
    updateDisplay(currentValue)}
  //If the button pushed is an operator or results in clearing, the calculator
  //will check for which function to perform
  else {
    console.log(secondValue);
  //If there are already two numbers being operated upon, an operation previously
  //selected will be performed on the two and they will be stored as the secondValue.
      if (secondValue != undefined) {
        switch(event.target.innerText) {
          case 'C':
            clearAll();
            break;
          case '<-':
            //backspace();
            break;
          case '=':
            combine(firstValue, secondValue, operation)
            break;
          default:
            operation = event.target.innerText;
            console.log(operation);
            combine(firstValue, secondValue, operation);
      }
    } else {
      secondValue = firstValue.join('');
      firstValue = [];
      console.log('first' + firstValue)
      console.log('second' + secondValue);
      operation = event.target.innerText;
      updateDisplay(operation);
    }
  }
}

function updateDisplay(number) {
  const displayBox = document.querySelector('.inner-display');
  const contentArea = document.createElement('p');
  if (displayBox.hasChildNodes()) {
    displayBox.removeChild(displayBox.childNodes[0]);
  }
  let text = document.createTextNode(number);
  contentArea.appendChild(text);
  displayBox.appendChild(contentArea);
}

function clearAll() {
  firstValue = [];
  secondValue = undefined;
  operation = undefined;
  updateDisplay(0);
}

function combine(first, second, operator) {
  console.log("howdy");
  //If equals is pressed with no input (or input of zero), zero is automatically returned.
  if (firstValue == 0) {
    updateDisplay(0);
    clearAll();
  }
}

init();
updateDisplay(0);
