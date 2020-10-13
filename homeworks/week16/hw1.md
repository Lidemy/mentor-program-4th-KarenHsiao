```
console.log(1)
setTimeout(() => {
  console.log(2)
}, 0)
console.log(3)
setTimeout(() => {
  console.log(4)
}, 0)
console.log(5)
```
1. `console.log(1)` 進入 call stack  
=> 執行後印出 1  
=> 執行結束從 call stack 裡 pop 掉

2. `setTimeout()` 進入 call stack  
=> `setTimeout()` 是 WEB API，呼叫瀏覽器設定 0 ms到期的定時器  
=> 0 ms 到期後第一個參數 `()=>{console.log(2)}` 進入 callback queues 等待被執行  
=> `setTimeout()`執行結束從 call stack 裡 pop 掉

3. `console.log(3)` 進入 call stack  
=> 執行後印出 3  
=> 執行結束從 call stack 裡 pop 掉

4. `setTimeout()` 進入 call stack  
=> `setTimeout()` 是 WEB API，呼叫瀏覽器設定 0 ms到期的定時器  
=> 0 ms 到期後第一個參數 `()=>{console.log(4)}` 進入 callback queues 等待被執行  
=> `setTimeout()`執行結束從 call stack 裡 pop 掉

5. `console.log(5)` 進入 call stack  
=> 執行後印出 5  
=> 執行結束從 call stack 裡 pop 掉

6. event loop 偵測到 call stack 目前完全清空就開始把 callback queues 裡的 function 依照先進先出的順序依序將 function 丟進 call statck 裡

7. `()=>{console.log(2)}` 進入 call stack  
=> `console.log(2)` 進入 call stack，堆疊在`()=>{}`上一層  
=> 執行後印出 2  
=> `console.log(2)` 執行結束從 call stack 裡 pop 掉  
=> `()=>{console.log(2)}`執行結束從 call stack 裡 pop 掉

8. event loop 偵測到 call stack 目前完全清空就開始把 callback queues 裡的 function 依照先進先出的順序依序將 function 丟進 call statck 裡

9. `()=>{console.log(4)}` 進入 call stack  
=> `console.log(4)` 進入 call stack，堆疊在`()=>{}`上一層  
=> 執行後印出 4  
=> `console.log(4)` 執行結束從 call stack 裡 pop 掉  
=> `()=>{console.log(4)}`執行結束從 call stack 裡 pop 掉

10. 程式整個執行完畢
