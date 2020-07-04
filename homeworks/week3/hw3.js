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
    if (isPrime(Number(input[i]))) {
      console.log('Prime');
    } else { console.log('Composite'); }
  }
  function isPrime(num) {
    if (num === 1) return false;
    for (let i = 2; i < num; i += 1) { // num = 2 時，不會跑 for 迴圈，會直接 return true
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
}
