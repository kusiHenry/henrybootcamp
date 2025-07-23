// import all the functions you need from the math module (adding the logging functions too )
const { add, subtract, multiply, divide, 
    loggedAdd, loggedDivide, loggedSubtract, loggedMultiply } = require("./math");

console.log(add(1, 2)); // 3

console.log(subtract(1, 2)); // -1

console.log(multiply(1, 2)); // 2

console.log(divide(1, 2)); // 0.5


//Bonus Testings 
(async () => {
  console.log(await loggedAdd(3, 4)); // 7 (and logs to file)
  console.log(await loggedSubtract(5, 3)); // 2 (and logs to file)
  console.log(await loggedMultiply(2, 6)); // 12 (and logs to file)
  console.log(await loggedDivide(10, 2)); // 5 (and logs to file)
})();