## hw1：好多星星
很直覺的會想用雙層for loop 做，但無意間看到其他同學用單層 for loop 加 ` '*'.repeat(i) `，覺得又是另一種新思維，之後就算解題完成也還可以再想想看用其他種方式解，訓練自己的思維模式也讓自己練習不習慣用的語法。
## hw2：水仙花數
將腦中所想的步驟、方法轉換成程式碼的過程中蠻順暢的，但第一次跑出來結果不對，各處加 `console.log` 找問題時發現 `num` 經過 `while` 迴圈後會被改值，下一行的 `if` 就會拿到被改值的 `num` 做判斷，程式碼請見下方。  
所以我就給 `while` 裡的 `num` 另一個新名字`checkNum`，不知道在盡量不變動其他程式碼的前提下，這是不是個好方法? 我覺得又多了另一個變數蠻混淆的。  

```javascript=  
//只用一個 num 變數會出錯
function isFlower(num){
    let result = 0
    let digit = 0           
    while(num>0){
        digit = num % 10    //取位數
        result += digit**num.toString().length  
        num = Math.floor(num/10)
    }
    if(num === result){
        return true
    }
    return false
}  
```

  

另一個問題是計算數字總位數，原本是用 `function length(num)` 計算總位數，後來又想到另一個方法 `num.toString().length`，想請問這兩種方法用 function 和一行解決的`num.toString().length`哪個會較好? 通常好的程式碼是越簡潔越好嗎?  
```javascript=
function length(num){
    let i = 0
    while(num>0){
        num = Math.floor(num/10)
        i = i + 1
    }
    return i
}
```
## hw3：判斷質數
原本以為 num = 2 時會進 for 迴圈裡判斷，結果發現沒有進去迴圈，直接跳 return ture，疑惑了超久，想說只是一個結構很簡單的迴圈怎麼會弄不懂，後來才恍然大悟，因為 for 的條件不成立，`(i = 2; 2<2; i++)`，以往看到 for 迴圈都很順的直接看 i 的起始值和終值，沒注意到整個條件是否成立，這部分以後要再多注意。  

```javascript=
function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i < num; i += 1) {
    return true
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
```
## hw4：判斷迴文
這次用比較陌生的三元運算子代替用的很習慣的 if，整個程式看起來有比較簡潔一點
另外，原本用`result.push(str[i])` ，後來錯了才意識到 result 是字串型態， .push() 是用在 array，下次要注意使用的 function 是針對什麼型態。
```javascript=
const str = lines[0];
console.log(reverse(str) ? 'True' : 'False');
function reverse(string) {
  let result = '';
  for (let i = string.length - 1; i >= 0; i -= 1) {
    result += string[i];
  }
  return result === string;
}
```
## hw5：聯誼順序比大小
這題在寫之前有先看過[ALG101]在提到要注意輸入範圍時，有拿這題出來當範例，沒想到這週的作業就是要解這題，因此一開始就有先從"如果是超多位數要怎麼做比較"來切入，我的想法是先判斷 a, b 兩數的位數，如果是 a 的位數多就做...，如果是 b 的位數多就做...，如果是位數一樣多就做每個位數比大小。(我只想到用位數來做....)

比較困難、花較多時間的地方是在判斷出來後要做什麼和回傳的「結果」是什麼，原本直覺的用以下方法(只是架構非執行程式)，但發現回傳的結果要再做一次處理，判斷是要比大還是比小，因為回傳的結果都是大的，總而言之，我覺得這題會要判斷兩次，是要比大還是比小，哪個數大哪個數小(所以共會有 2x2 = 4個結果)，這兩個判斷是要怎麼分配放的位置? 是放在主程式嗎? 還是放 function 裡? (不知道我這樣想是否正確?)

因為想不出好的處理方式，於是換個方向，那一開始就先判斷是比大還是比小，用兩個 function 區分比大和比小，function 內容基本是一樣的，只是修改一些比較的部分，不過想想這樣好像很冗長，真的要用兩個很像的 function 做嗎?  

就在起身動一動閒晃過後回來，竟然不知不覺的就用起三元運算子，也成功地解出題目，看來在上一題判斷迴文時刻意練習的三元運算子，在這一題默默地展現出練習的成果了(?)，原本以為這一題會很卡，但實際做起來比想像中的順，原因可能是更會把題目拆解成步驟和使用填空法，先把架構寫出來在細想內容。教完作業後我要趕快去看老師的解法和同學們的，很想看看其他人是怎麼寫的。
```javascript=
console.log(function)

function:
if(a>b){
    return a
}else if(b>a){
    return b
}else{兩位數一樣多，從最大位數開始比每一位數
    if(a>b){
        return a
    }else if(b>a){
        return b 
    }else{return DRAW}    
```