const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const marks = [];

function findHighestMarks() {
  let highestMarks = marks[0];

  for (let i = 1; i < marks.length; i++) {
    highestMarks = marks[i] > highestMarks ? marks[i] : highestMarks;
  }

  console.log(`The highest marks scored by a student: ${highestMarks}`);
  rl.close();
}

function inputMarks(studentNumber) {
  rl.question(`Enter marks for student ${studentNumber}: `, (mark) => {
    marks.push(parseFloat(mark));

    if (studentNumber < 5) {
      inputMarks(studentNumber + 1);
    } else {
      findHighestMarks();
    }
  });
}

inputMarks(1);
