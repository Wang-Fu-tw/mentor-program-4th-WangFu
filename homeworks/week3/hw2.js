const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const testCase = [];

rl.on('line', (line) => {
  testCase.push(line);
});

function power(x, y) {
  return y ? x * power(x, y - 1) : 1;
}

function Narcissistic(a) {
  const str = a.toString();
  let sum = 0;
  for (let i = 0; i < str.length; i += 1) {
    sum += power(Number(str[i]), str.length);
    if (sum > a) return false;
  }

  return (sum === a);
}

function solve(lines) {
  const [N, M] = lines[0].split(' ').map(Number);
  for (let i = N; i <= M; i += 1) {
    if (Narcissistic(i)) console.log(i);
  }
}

rl.on('close', () => {
  solve(testCase);
});
