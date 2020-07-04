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
  const str = input[0];
  console.log(reverse(str) ? 'True' : 'False');
  function reverse(string) {
    let result = '';
    for (let i = string.length - 1; i >= 0; i -= 1) {
      result += string[i];
    }
    return result === string;
  }
}
