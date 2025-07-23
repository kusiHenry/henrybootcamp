// create your 4 function

const fs = require('fs').promises;

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
};

// export them

module.exports = {
  // Basic functions
  add,
  subtract,
  multiply,
  divide,
};