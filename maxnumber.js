const prompt = require('prompt-sync')();

const num1 = parseFloat(prompt("first number :"));
const num2 = parseFloat(prompt("second number :"));
const num3 = parseFloat(prompt("third number :"));

const largest = Math.max(num1, num2, num3);

console.log("the biggest number is " + largest);

