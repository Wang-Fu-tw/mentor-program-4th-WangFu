const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const testCase = [];

rl.on('line', (line) => {
  testCase.push(line);
});

function solve(lines) {
  const [N, B] = lines[0].split(' ').map(Number);
  const home = [];
  for (let i = 1; i <= N; i += 1) {
    const [w, v] = lines[i].split(' ').map(Number);
    home.push({
      w,
      v,
    });
  }

  let arr = new Array(B + 1);
  arr.fill(0);

  for (let i = 0; i < N; i += 1) {
    const temp = [...arr];
    for (let j = 1; j < arr.length; j += 1) {
      if (home[i].w <= j) {
        //  未加該物品時最大價值 ： 減去該物品重量之最大價值＋該物品價值
        temp[j] = arr[j] >= arr[j - home[i].w] + home[i].v
          ? arr[j] : arr[j - home[i].w] + home[i].v;
      }
    }
    arr = temp;
  }
  console.log(arr[B]);
}

//              data[i][j] = Math.max(arr[i].value + data[i - 1][j - arr[i].weight], data[i - 1][j])
// w   v    |    0   1   2   3   4   5   6   7   8
// -----------------------------------------------
// 0   0    |    0   0   0   0   0   0   0   0   0
// 2   3    |    0   0   3   3   3   3   3   3   3
// 1   2    |    0   2   3   5   5   5   5   5   5
// 3   4    |    0   2   3   5   6   7   9   9   9
// 2   2    |    0   2   3   5   6   7   9   9   11

rl.on('close', () => {
  solve(testCase);
});
