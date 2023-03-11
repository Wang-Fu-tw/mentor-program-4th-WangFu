const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const testCase = [];

rl.on('line', (line) => {
  testCase.push(line);
});

function solve(lines) {
  const [H, W] = lines[0].split(' ').map(Number);
  const maze = [];
  const parent = [];
  for (let i = 0; i < H; i += 1) {
    const row = lines[i + 1].split('');
    maze[i] = [...row];
    parent[i] = [...row];
  }

  const vector = [[0, 1], [1, 0], [-1, 0], [0, -1]];
  const queue = [];
  const start = {
    x: 0,
    y: 0,
  };

  queue.push(start);
  let step = '0';
  parent[start.y][start.x] = step;

  while (queue.length) {
    const now = queue.shift();
    step = Number(parent[now.y][now.x]) + 1;
    if (now.x === W - 1 && now.y === H - 1) {
      console.log(parent[H - 1][W - 1]);
      break;
    }
    for (let i = 0; i < 4; i += 1) {
      const next = {
        x: now.x + vector[i][0],
        y: now.y + vector[i][1],
      };

      if (next.x >= 0 && next.y >= 0 && next.x < W && next.y < H && maze[next.y][next.x] !== '#' && parent[next.y][next.x] === '.') {
        queue.push(next);
        parent[next.y][next.x] = step.toString();
      }
    }
  }
}

rl.on('close', () => {
  solve(testCase);
});
