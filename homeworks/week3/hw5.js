const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const testCase = [];

rl.on('line', (line) => {
  testCase.push(line);
});

function max(n1, n2) {
  if (n1.length > n2.length) return 1;
  if (n1.length < n2.length) return 0;

  let r;
  for (let i = 0; i < n1.length; i += 1) {
    if (n1[i] !== n2[i]) {
      r = n1[i] > n2[i] ? 1 : 0;
      break;
    }
  }

  return r;
}

function game(s) {
  const [x, y, z] = s.split(' ');
  if (x === y) return 'DRAW';

  const b = z > 0 ? 1 : 0;
  return max(x, y) === b ? 'A' : 'B';
}

function solve(lines) {
  const M = Number(lines[0]);
  for (let i = 1; i <= M; i += 1) {
    console.log(game(lines[i]));
  }
}

rl.on('close', () => {
  solve(testCase);
});
