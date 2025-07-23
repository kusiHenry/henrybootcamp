// VAT Calculator.js

function calculateGross(amount, vatPercentage = 0.2) {
  console.log("calculateGross", vatPercentage);
  if (typeof amount !== "number" || typeof vatPercentage !== "number") {
    throw new Error("Both amount and vatPercentage must be numbers");
  }
  if (amount < 0 || vatPercentage < 0) {
    throw new Error("Amount and vatPercentage must be positive numbers");
  }

  const grossAmount = amount  *(1 + vatPercentage);

  return parseFloat(grossAmount.toFixed(2));
}

function calculateNet(grossAmount, vatPercentage = 0.2) {
  if (typeof grossAmount !== "number" || typeof vatPercentage !== "number") {
    throw new Error("Both amount and vatPercentage must be numbers");
  }
  if (grossAmount < 0 || vatPercentage < 0) {
    throw new Error("grossAmount and vatPercentage must be positive numbers");
  }

  const netAmount = grossAmount / (1 + vatPercentage);
  return parseFloat(netAmount.toFixed(2));
}

function calculateVAT(amount, vatPercentage = 0.2) {
  if (typeof amount !== "number" || typeof vatPercentage !== "number") {
    throw new Error("Both amount and vatPercentage must be numbers");
  }
  if (amount < 0 || vatPercentage < 0) {
    throw new Error("Amount and vatPercentage must be positive numbers");
  }

  const result = amount * vatPercentage;
  return parseFloat(result.toFixed(2));
}

module.exports = { calculateGross, calculateNet, calculateVAT };
