const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter your password: ', (password) => {
  rl.question('Confirm your password: ', (confirmPassword) => {
    if (password === confirmPassword) {
      console.log("Password Matched. Password validation Successful.");
    } else {
      console.log("Password didn't match. Password validation unsuccessful.");
    }
    rl.close();
  });
});

