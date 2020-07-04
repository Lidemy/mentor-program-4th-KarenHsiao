/* eslint no-use-before-define: 0 */
const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', (line) => {
  lines.push(line);
});

rl.on('close', () => {
  solve(lines);
});

function solve(input) {
  const n = Number(input[0]);
  let array = [];
  for (let i = 1; i <= n; i += 1) {
    array = input[i].split(' ');
    console.log(whoWin(array));
  }

  function whoWin(arr) {
    const aLen = arr[0].length;
    const bLen = arr[1].length;
    if (aLen > bLen) {
      return arr[2] === '1' ? 'A' : 'B';
    }
    if (bLen > aLen) {
      return arr[2] === '1' ? 'B' : 'A';
    }
    const a = arr[0];
    const b = arr[1];
    for (let i = 0; i < a.length; i += 1) {
      if (a[i] > b[i]) {
        return arr[2] === '1' ? 'A' : 'B';
      }
      if (b[i] > a[i]) {
        return arr[2] === '1' ? 'B' : 'A';
      }
    }
    return 'DRAW';
  }
}
