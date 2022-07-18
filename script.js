function add(num, ber) {
  return num + ber;
}
function multiply(num, ber) {
  return num * ber;
}
function subtract(num, ber) {
  return num - ber;
}
function divide(num, ber) {
  return num / ber;
}
function operate(operator, num, ber) {
  switch (operator) {
    case "add":
      return add(num, ber);
    case "multiply":
      return multiply(num, ber);
    case "subtract":
      return subtract(num, ber);
    case "divide":
      return divide(num, ber);
    default:
      return "mf uuuuhhhh";
  }
}

let operandValue = "";
let operatorValue = null;
let firstOperand = "";

let display = document.querySelector(".display");
let currDisplay = document.querySelector(".currentCalculation");
let prevDisplay = document.querySelector(".previousCalculation");
let numBtn = document.querySelectorAll(".numBtn");
let operatorBtn = document.querySelectorAll(".operator");

numBtn.forEach(function (button) {
  button.addEventListener("click", function (e) {
    currDisplay.append(e.target.innerText);
    operandValue += e.target.innerText;
  });
});

operatorBtn.forEach(function (button) {
  button.addEventListener("click", function (e) {
    if (operandValue !== "" && firstOperand !== "") {
      prevDisplay.textContent = "";
      currDisplay.textContent = "";
      result = operate(operatorValue, firstOperand, operandValue);
      firstOperand = result;
      operandValue = "";
      prevDisplay.textContent = result;
      operatorValue = e.target.id;
      prevDisplay.append(e.target.innerText);
    } else if (operandValue == "" && firstOperand !== "") {
      return;
    } else {
      prevDisplay.append(operandValue);
      prevDisplay.append(e.target.innerText);
      currDisplay.textContent = "";
      operatorValue = e.target.id;
      firstOperand = operandValue;
      operandValue = "";
    }
  });
});
