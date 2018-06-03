let value = [];

function init() {
  let buttons = document.querySelectorAll('.button');
  buttons.forEach(function(btn) {
    btn.addEventListener('click', numberDisplay);
  });
}

function numberDisplay(event) {
  value.push(event.target.innerText);
  console.log(event.target.innerText);
  console.log(value);
  updateDisplay(value);
}

function updateDisplay(number) {
  const displayBox = document.querySelector('.inner-display');
  const contentArea = document.createElement('p');
  let text = document.createTextNode(number);
  contentArea.appendChild(text);
  displayBox.appendChild(contentArea);
  if (displayBox.hasChildNodes()) {
    console.log("Hey!")
  };
}

init();
