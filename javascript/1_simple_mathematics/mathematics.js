// mathFunctions.js

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  if (b === 0) throw new Error("Cannot divide by zero");
  return a / b;
}

function modulus(a, b) {
  if (b === 0) throw new Error("Cannot find modulus by zero");
  return a % b;
}

module.exports = { add, multiply, subtract, divide, modulus };
