// create your 4 function

const fs = require('fs').promises;

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
};

//log the calculations to a file 
const logCalculation = async (operation, a, b, result) => {
    const logEntry = `${a} ${operation} ${b} = ${result}\n`;
    try {
        await fs.appendFile('calculations.log', logEntry);
    } catch (err) {
        console.error('Error writing to log file:', err);
    }
};


// Wrapper functions with logging
const loggedAdd = async (a, b) => {
  const result = add(a, b);
  await logCalculation('+', a, b, result);
  return result;
};

const loggedSubtract = async (a, b) => {
  const result = subtract(a, b);
  await logCalculation('-', a, b, result);
  return result;
};

const loggedMultiply = async (a, b) => {
  const result = multiply(a, b);
  await logCalculation('*', a, b, result);
  return result;
};

const loggedDivide = async (a, b) => {
  const result = divide(a, b);
  await logCalculation('/', a, b, result);
  return result;
};


// export them

module.exports = {
  // Basic functions
  add,
  subtract,
  multiply,
  divide,
  
  // Logged versions (for bonus)
  loggedAdd,
  loggedSubtract,
  loggedMultiply,
  loggedDivide
};