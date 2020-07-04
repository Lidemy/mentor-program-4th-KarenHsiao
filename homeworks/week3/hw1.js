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
  for (let i = 1; i <= n; i += 1) {
    let result = '';
    for (let j = 0; j < i; j += 1) {
      result += '*';
    }
    console.log(result);
  }
}
