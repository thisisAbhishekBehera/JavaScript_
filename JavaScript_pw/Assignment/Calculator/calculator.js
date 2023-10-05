const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculator(num1, num2, operator) {
  let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        console.log("Division by zero is not allowed.");
        return;
      }
      break;
    default:
      console.log("Invalid operator");
      return;
  }

  console.log(`Result: ${result}`);
  rl.close();
}

rl.question('Enter the first number: ', (num1) => {
  rl.question('Enter the second number: ', (num2) => {
    rl.question('Enter the operator (+, -, *, /): ', (operator) => {
      calculator(parseFloat(num1), parseFloat(num2), operator);
    });
  });
});
