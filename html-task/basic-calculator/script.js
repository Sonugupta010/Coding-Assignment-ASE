let display = document.getElementById("display");
let clearButton = document.getElementById("clear");

function clearDisplay() {
  display.value = "";
}

function appendToDisplay(value) {
  display.value += value;
}

function calculateResult() {
  let expression = display.value;
  
  expression = expression.replace(/x/g, '*');
  
  try {
    let result = eval(expression);
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}

clearButton.addEventListener("click", clearDisplay);

// Handle the '*' character
let multiplicationButton = document.querySelector("button[onclick*='*']");
if (multiplicationButton) {
  multiplicationButton.addEventListener("click", function() {
    appendToDisplay('*');
  });
}
