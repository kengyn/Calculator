function add(num, ber) {
  return +num + +ber;
}
function multiply(num, ber) {
  return num * ber;
}
function subtract(num, ber) {
  return num - ber;
}
function divide(num, ber) {
  if (num !== 0 && ber == 0) {
    return "bruh";
  }
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

let currDisplay = document.querySelector(".currentCalculation");
let prevDisplay = document.querySelector(".previousCalculation");
let numBtn = document.querySelectorAll(".numBtn");
let operatorBtn = document.querySelectorAll(".operator");
let equalsBtn = document.querySelector(".equals");
let dotBtn = document.querySelector(".dot");
let clearBtn = document.querySelector(".clear");
let deleteBtn = document.querySelector(".delete");

dotBtn.addEventListener("click", (e) => {
  if (operandValue.toString().includes(".")) {
    return;
  } else {
    currDisplay.append(e.target.innerText);
    operandValue += e.target.innerText;
  }
});

numBtn.forEach(function (button) {
  button.addEventListener("click", function (e) {
    if (operandValue.length >= 21) {
      return console.log("bro please");
    }
    currDisplay.append(e.target.innerText);
    operandValue += e.target.innerText;
  });
});

operatorBtn.forEach(function (button) {
  button.addEventListener("click", function (e) {
    //??????????
    if (operandValue == "" && firstOperand == "" && operatorValue == null) {
      return;
    }
    //if there are values in the calculator and an operator is pressed
    //clear display, calculate, and add result to previous display with the operand
    if (operandValue !== "" && firstOperand !== "") {
      result = operate(operatorValue, firstOperand, operandValue);
      clear();
      firstOperand = result;
      prevDisplay.textContent = result;
      operatorValue = e.target.id;
      prevDisplay.append(e.target.innerText);
      //check for when an operator is pressed more than once
    } else if (operandValue == "" && firstOperand !== "") {
      return;
      //add operator to screen
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

equalsBtn.addEventListener("click", function () {
  if (operandValue !== "" && operatorValue !== null && firstOperand !== "") {
    result = operate(operatorValue, firstOperand, operandValue);
    clear();
    operandValue = result;
    currDisplay.textContent = result;
  }
});

clearBtn.addEventListener("click", () => {
  clear();
});

deleteBtn.addEventListener("click", () => {
  operandValue = operandValue.slice(0, -1);
  currDisplay.textContent = operandValue;
});

let clear = function () {
  prevDisplay.textContent = "";
  currDisplay.textContent = "";
  firstOperand = "";
  operandValue = "";
  operatorValue = null;
};
