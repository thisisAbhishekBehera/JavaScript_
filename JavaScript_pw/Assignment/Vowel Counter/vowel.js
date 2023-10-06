const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function countVowels(name) {
  const vowels = "aeiouAEIOU";
  let vowelCount = 0;

  for (let i = 0; i < name.length; i++) {
    const char = name[i];
    if (vowels.includes(char)) {
      vowelCount++;
    }
  }

  return vowelCount;
}

rl.question("Enter your name: ", (userInput) => {
  const numVowels = countVowels(userInput);
  console.log("Number of vowels in your name:", numVowels);
  rl.close();
});
