```
for(var i=0; i<5; i++) {
  console.log('i: ' + i)
  setTimeout(() => {
    console.log(i)
  }, i * 1000)
}
```
1. for 迴圈進入 call satck 開始被執行  
  
2. i = 0  < 5 為 true  
=> `console.log('i: ' + i)` 進入 call stack  
=> 執行 `console.log('i: ' + i)`，印出 i: 0  
=> `console.log('i: ' + i)` 執行完畢，從 call stack pop 掉  
=> `setTimeout()` 進入 call stack  
=> 呼叫瀏覽器設定 0 * 1000 ms 定時器，並在到期後將第一個參數 `() => {console.log(i)}` 放進 callback queues 等待被執行  
=> `setTimeout()`執行完畢，從 call stack pop 掉

3. i = 1 < 5 為 true
=> `console.log('i: ' + i)` 進入 call stack  
=> 執行 `console.log('i: ' + i)`，印出 i: 1  
=> `console.log('i: ' + i)` 執行完畢，從 call stack pop 掉  
=> `setTimeout()` 進入 call stack  
=> 呼叫瀏覽器設定 1 * 1000 ms 定時器，並在到期後將第一個參數 `() => {console.log(i)}` 放進 callback queues 等待被執行  
=> `setTimeout()`執行完畢，從 call stack pop 掉

3. i = 2 < 5 為 true
=> `console.log('i: ' + i)` 進入 call stack  
=> 執行 `console.log('i: ' + i)`，印出 i: 2  
=> `console.log('i: ' + i)` 執行完畢，從 call stack pop 掉  
=> `setTimeout()` 進入 call stack  
=> 呼叫瀏覽器設定 2 * 1000 ms 定時器，並在到期後將第一個參數 `() => {console.log(i)}` 放進 callback queues 等待被執行  
=> `setTimeout()`執行完畢，從 call stack pop 掉

3. i = 4 < 5 為 true
=> `console.log('i: ' + i)` 進入 call stack  
=> 執行 `console.log('i: ' + i)`，印出 i: 4  
=> `console.log('i: ' + i)` 執行完畢，從 call stack pop 掉  
=> `setTimeout()` 進入 call stack  
=> 呼叫瀏覽器設定 4 * 1000 ms 定時器，並在到期後將第一個參數 `() => {console.log(i)}` 放進 callback queues 等待被執行  
=> `setTimeout()`執行完畢，從 call stack pop 掉

4. i = 5 < 5 為 false
=> 跳出 for 迴圈，for 迴圈結束執行， 從 call stack pop 掉

5. event loop 偵測到 call stack 目前完全清空就開始把 callback queues 裡的 function 依照先進先出的順序依序將 function 丟進 call statck 裡

6. `() => {console.log(i)}` 被 event loop 丟進 call stack  
=> `console.log(i)` 進入 call satck 並被執行印出 5  
=> `console.log(i)`結束執行從 call stack pop 掉  
=> `() => {console.log(i)}`結束執行從 call stack pop 掉

7. 重複以第七步驟 4 次，印出 4 個 5

8. 程式執行結束
