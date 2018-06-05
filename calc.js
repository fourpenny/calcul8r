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
  if (!isNaN(pressed)){
    firstValue.push(event.target.innerText);
    let currentValue = firstValue.join('');
    updateDisplay(currentValue)}
  else {
    console.log(pressed);
    updateDisplay(pressed);
    whatOperation(pressed);
    console.log('operation ' + operation);
    if (secondValue != undefined) {
      secondValue = combine(firstValue, secondValue, operation);
      console.log(secondValue);
    } else {
      secondValue = firstValue.join('');
      firstValue = [];
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

function whatOperation(op) {
  console.log(op);
  let functions = {
    'x': function() {
      operation = 'multiply';
      return;
    },
    '-': function() {
      operation = 'subtract';
      return;
    },
    '÷': function() {
      operation = 'divide';
      return;
    },
    '+': function() {
      operation = 'add';
      return;
    },
    'C': function() {
      //clearAll();
      return;
    },
    '<-': function() {
      //backspace();
      return;
    },
    '=': function() {
      combine(firstValue, secondValue, operation);
      return;
    },
    'default': function() {
      console.log('Oops, something went wrong');
      return;
    }
  };
  return (functions[op] || functions['default'])();
}

function combine(first, second, operator) {
  console.log(operator);
  if (firstValue == 0) {
    if (secondValue != undefined) {
      return secondValue;
    } else {
      return 0;
    }
  }
  let a = first;
  let b = second;
  console.log('first is ' + first);
  console.log('second is ' + second);
  /*let doFunction = {
    'multiply': function(first, second) {
      return (first * second);
    },
    'subtract': function(first, second) {
      return (second - first);
    },
    'add': function(a, b) {
      return a;
    },
    'divide': function(first, second) {
      return (second / first);
    },
    'default': function() {
      return 'Default';
    }
  }
  return (doFunction[operator] || doFunction['default'])();*/
}

init();
