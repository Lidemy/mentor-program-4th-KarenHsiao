```javascript=
var a = 1
function fn(){
  console.log(a) //undefined
  var a = 5
  console.log(a) //5
  a++
  var a
  fn2()
  console.log(a) //20
  function fn2(){
    console.log(a) //6
    a = 20
    b = 100
  }
}
fn()
console.log(a) //1
a = 10
console.log(a) //10
console.log(b) //100
```

1. 建立 global EC
```
global EC:{
  VO:{
    fn: function,
    a: undefined
  }
  scopeChain:[globalEC.VO]
}
```
當 fn 建立時設置 `fn.[[Scope]] = globalEC.scopeChain = globalEC.VO`

2. 執行`var a =1` =>`globalEC.VO.a = 1`
執行 `fn()`，進入 fn

3. 建立 fn EC
```
fn EC:{
  AO:{
    fn2: function,
    a: undefined
  }
  scopeChain: [fnEC.AO, fn.[[Scope]]]
   =>[fnEC.AO, globalEC.VO]
}
```
當 fn2 建立時設置 `fn2.[[Scope]] = fn.scopeChain = fnEC.AO, globalEC.VO`

4. 執行 `console.log(a)` => 在 fnEC 裡找到 a = undefined => **印出 undefined**

執行`a = 5` => `fnEC.AO.a = 5`

執行 `console.log(a)` => 在 fnEC 裡找到 a = 5 => **印出 5**

執行 `a++` => `fnEC.AO.a = 6`

執行 `fn2()`，進入 fn2

5. 建立 fn2 EC
```
fn2 EC:{
  AO:{ }
  scopeChain: [fn2EC.AO, fn2.[[Scope]]]
   =>[fn2EC.AO, fnEC.AO, globalEC.VO]
}
```
6. 執行 `console.log(a)` => 在 fn2EC 裡找不到 a => 再往上一層 fnEC 裡找到 a = 6  => **印出 6**

執行 `a = 20` => 在 fn2EC 裡找不到 a => 再往上一層 fnEC 裡找到 a => `fnEC.AO.a = 20`

執行 `b = 100` => 在 fn2EC 裡找不到 b => 再往上一層 fnEC 裡找不到 b => 再往上一層 globalEC 裡找到 b => `globalEC.VO.b = 100`

7. fn2 執行完, 清空抽走 fn2 EC

8. 執行 `console.log(a)` (第 9 行) => 在 fnEC 裡找到 a = 20 => **印出 20**

9. fn 執行完, 清空抽走 fn EC

10. 執行 `console.log(a)` (第 17 行) => 在 globalEC 裡找到 a = 1 => **印出 1**

11. 執行 `a = 10` => `globalEC.VO.a = 10`

12. 執行 `console.log(a)` => 在 globalEC 裡找到 a = 10 => **印出 10**

13. 執行 `console.log(b)` => 在 globalEC 裡找到 b = 100 => **印出 100**

執行結果:
undefined  
5  
6  
20  
1  
10  
100  
```
fn2 EC:{    // 第一個被清空掉的 EC
   AO:{
   
  },
  scopeChain: [fn2.AO, fn2.[[Scope]]]
  => [fn2.AO, fnEC.AO, globalEC.VO]
}

fn EC:{  // 第二個被清空掉的 EC
  AO:{
    fn2: function,
    a: 20
   },
   scopeChain:[fnEC.AO, fn.[[Scope]]]
   =>[fnEC.AO, globalEC.VO]
}
fn2.[[Scope]] = fnEC.AO, globalEC.VO

global EC:{ // 最後被清空掉的 EC  
  VO:{  
    fn: function,  
    a: 10  
    b: 100  
  },  
  scopeChain:[globalEC.VO]  
}  
fn.[[Scope]] = globalEC.VO
```