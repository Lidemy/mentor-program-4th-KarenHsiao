```
const obj = {
  value: 1,
  hello: function() {
    console.log(this.value)
  },
  inner: {
    value: 2,
    hello: function() {
      console.log(this.value)
    }
  }
}
  
const obj2 = obj.inner
const hello = obj.inner.hello
obj.inner.hello() // ??
obj2.hello() // ??
hello() // ??
```
要找 this 的值可以用 call function 來看，call( ) 裡面的第一個參數就是 this 值
```
obj.inner.hello() 
=> obj.inner.hello.call(obj.inner)
=> this.value = obj.inner.value
=> 2

obj2.hello()
=> obj2.hello.call(obj2)
=> this.value = obj2.value = obj.inner.value
=> 2

hello()
=> hello.call(global)
=> this.value = global.value
=> undefined
```