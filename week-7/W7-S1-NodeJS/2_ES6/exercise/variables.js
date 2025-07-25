// Using var (function-scoped)
/*
var message = "Hello, World!";
if (true) {
  var message = "Hello from block!";
  console.log(message); // "Hello from block!" (let is block-scoped)
}
console.log(message); // "Hello from block!" (var is not block-scoped)
*/
// Using let (block-scoped)

let message = "Hello, World!";
if (true) {
  let message = "Hello from block!";
  console.log(message); // "Hello from block!" (let is block-scoped)
}
console.log(message); // "Hello, World!" (let is block-scoped)

// Using const for constants
const PI = {
  value: 3.14159,
};

PI.value = 3.14; // Allowed
