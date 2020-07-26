## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
### < ruby>
用來標註拼音，例如注音或日文的平假、片假名符號
```htmlmixed=
<ruby>你<rt>ㄋ 一ˇ</rt></ruby>
<ruby>好<rt>ㄏㄠˇ</rt></ruby>
```
(雖然應該很少使用，但覺得很有趣)

![](https://i.imgur.com/gEPjrjN.png?2)

### < details>, < summary>
< details> 用來延伸或展開訊息內容，當網頁載入時是隱藏收起的狀態。可用於 F&Q 時。
< summary> 可作為 < details> 的標題或內容摘要。
```htmlmixed=
<details>
  <summary>Q1. How to use ?</summary>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
</details>
```
![](https://i.imgur.com/JDf9Oy7.png?1)

### < select> 下拉式選單
```htmlmixed=
<label> choose a fruit :
   <select>
    <option>apple</option>
    <option>orange</option>
    <option>peach</option>
   </select>
 </label>
```
![](https://i.imgur.com/Ez412ar.png?1)

## 請問什麼是盒模型（box modal）
每個元素都可視為一個從裡到外有寬高的 content、padding、border 和 margin 的模型，此模型稱為 box model。
![](https://i.imgur.com/f4mMWDf.png?1)  

`box-sizing` 此屬性是將 width 指定給 border 或 content。

`border-box`: width 的計算是**從 border 開始**，加 border、padding 是向內改變，整個 box 的大小維持原樣。  

`content-box`: width 的計算是**從 content 開始**，加border、padding 是向外改變，整個 box 的大小會有變動。

## 請問 display: inline, block 跟 inline-block 的差別是什麼？
| display  | 位置 | 可否改變寬高 |標籤     |   附註  |
| -------------- | -------- | -----------| --- | --- |
| block        | 占滿一行 | 可以     | < div>< ul>< li>< p>< h1>    |     |
| inline       | 可以並排 | 無法      | < span>< a>< img>| 可以調整 marging/pading 不會對其他元素造成變動但會擋到其他元素    |
| inline-block   | 可以並排 | 可以      | < button> < input> < select>   |     |
* inline-block 會產生兩個標籤之間的預設空格，要去掉空格可以在容器 Font-Size 設為 0px，再指定子元素 Font-Size 為多少，或是在兩個標籤之間加註解。

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？
#### static 
網頁預設定位
#### relative 相對定位
以自己為相對位置做定位
#### fixed
定位後，滾動頁面位置也不會跑掉，會一直定在畫面同一個位置，可以說是相對於瀏覽器做定位，更準確的說是相對於 viewport 做定位。
#### absolute 絕對定位
定位點是往上找第一個 position 不是 static 的元素，被設為 absolute 的元素其位置會被後續元素取代，因為被設為 absolute 的元素已脫離正常排版流程。
(相較於 relative， 被設為 raletive 的元素還是在正常排版流程裡，所以即使移動了，原本的位置也會被佔據)


