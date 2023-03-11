const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const testCase = [];

rl.on('line', (line) => {
  testCase.push(line);
});

function prime(n) {
  if (n === 1) return 0;
  for (let i = 2; i <= n / 2; i += 1) {
    if (n % i === 0) return 0;
  }

  return 1;
}

function solve(lines) {
  const N = Number(lines[0]);
  for (let i = 1; i <= N; i += 1) {
    console.log(prime(Number(lines[i])) ? 'Prime' : 'Composite');
  }
}

rl.on('close', () => {
  solve(testCase);
});
