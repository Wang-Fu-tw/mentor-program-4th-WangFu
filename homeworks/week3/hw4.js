const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const testCase = [];

rl.on('line', (line) => {
  testCase.push(line);
});

function mirror(s) {
  for (let i = 0; i < s.length / 2; i += 1) {
    if (s[i] !== s[s.length - 1 - i]) return false;
  }

  return true;
}

function solve(lines) {
  const str = lines[0];
  console.log(mirror(str) ? 'True' : 'False');
}

rl.on('close', () => {
  solve(testCase);
});
