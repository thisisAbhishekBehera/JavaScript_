const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function capitalizeFirstLetter(name) {
  // Check if the first letter is lowercase, and capitalize it if it is
  const modifiedName =
    name && name[0].toLowerCase() === name[0]
      ? name[0].toUpperCase() + name.slice(1)
      : name;

  return modifiedName;
}

rl.question("Enter your name: ", (userInput) => {
  const modifiedName = capitalizeFirstLetter(userInput);
  console.log("Modified Name:", modifiedName);
  rl.close();
});

  