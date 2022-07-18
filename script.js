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
