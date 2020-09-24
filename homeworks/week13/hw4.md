## Webpack 是做什麼用的？可以不用它嗎？

module bundler。
因為有些瀏覽器不支援 ES6 的 export/import 用法，所以就出現了一些工具將模組化規範的模組轉換成瀏覽器可以執行，例如用 node.js 的方法寫程式再透過工具轉換成在瀏覽器上也可以執行，所以 Webpack 就是把++模組包在一起++轉換成在瀏覽器上也可以執行的一種工具。

既然是一種轉換的工具那也可以選擇不用它，在瀏覽器上沒有 export/require，所以要引入 module 時要用 `<script src="網址"></script>` 的方式將 module 引入就會有一個全域變數可以用，例如引入 JQuery 的全域變數 `$`，但如果有多個 module 同時引入，有可能變數會有衝突。

除了上述方法，後來瀏覽器原生也支援了 node.js 裡面的 export/import(部分 node.js)，這是 ES6 的語法，但是開啟檔案的方式要用 server 開啟，新的語法是近幾年才有的，因此有些瀏覽器不支援。
## gulp 跟 webpack 有什麼不一樣？
gulp 是 task 管理工具，可以對每個 task 做自定義安排，例如執行順序或那些 task 要一起執行，而每個 task 內容除了可以是 sass 的 compile、babel 的轉換之外也可以是時間校正或自動抓取 api 等等，task 的內容可以是任意的動作，而 gulp 就是管理這些 task 要如何執行。

webpack 是 module bundler。
原本在 node.js 上的 `import/module.export` 不能跑在瀏覽器上， webpack 幫你 bundle 這些 module 轉化成可以在瀏覽器上執行。
我們可以 import 任何資源像是圖片、css等等，webpack 都把這些視為是 module，再透過 webpack 裡每種資源對應到的 loader 把 import 進來的資源做處理下載 (預設 loader 只能載入 JavaScript)

總結: gulp 是對任意內容的 task 去做管理，webpack 是 bundle module 到瀏覽器上去執行。

## CSS Selector 權重的計算方式為何？
id > class > 標籤
比較特別要注意的:
1. 加在 html 標籤內的 css，inline style (1,0,0,0)
2. `!important` (1,0,0,0,0)，不得已狀況下才使用


