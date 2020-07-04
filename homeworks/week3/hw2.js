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
  const line = input[0].split(' ');
  const n = Number(line[0]);
  const m = Number(line[1]);
  for (let i = n; i <= m; i += 1) {
    if (isFlower(i)) {
      console.log(i);
    }
  }
  function isFlower(num) {
    let result = 0;
    let digit = 0;
    let checkNum = num;// 把 num 放到另一個變數裡，避免執行完 while 迴圈 num 被更改
    while (checkNum > 0) {
      digit = checkNum % 10;// 取位數
      result += digit ** num.toString().length;// num.toString().length 是計算數字幾位數
      checkNum = Math.floor(checkNum / 10);
    }
    if (num === result) {
      return true;
    }
    return false;
  }
}
