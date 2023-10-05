const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function mixColors(color1, color2) {
  let result;

  switch (color1) {
    case "red":
      switch (color2) {
        case "blue":
          result = "purple";
          break;
        case "yellow":
          result = "orange";
          break;
        default:
          result = "Invalid color combination";
          break;
      }
      break;
    case "blue":
      switch (color2) {
        case "red":
          result = "purple";
          break;
        case "yellow":
          result = "green";
          break;
        default:
          result = "Invalid color combination";
          break;
      }
      break;
    case "yellow":
      switch (color2) {
        case "red":
          result = "orange";
          break;
        case "blue":
          result = "green";
          break;
        default:
          result = "Invalid color combination";
          break;
      }
      break;
    default:
      result = "Invalid color combination";
      break;
  }

  console.log(`Resulting color: ${result}`);
  rl.close();
}

rl.question('Enter the first color: ', (color1) => {
  rl.question('Enter the second color: ', (color2) => {
    mixColors(color1.toLowerCase(), color2.toLowerCase());
  });
});
