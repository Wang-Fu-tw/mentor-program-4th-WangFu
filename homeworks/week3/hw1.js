const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const testCase = [];

rl.on('line', (line) => {
  testCase.push(line);
});

function star(a) {
  return a > 0 ? `${star(a - 1)}*` : '';
}

function solve(lines) {
  const n = Number(lines[0]);
  for (let i = 0; i < n; i += 1) {
    console.log(star(i + 1));
  }
}

rl.on('close', () => {
  solve(testCase);
});
