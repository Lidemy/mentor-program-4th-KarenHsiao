## 什麼是 Ajax？
Ajax 的全名 Asynchronous Javascript And XML，是一種技術，使用非同步 Javascript 跟 server 交換資料(以前都是用 XML格式，但現在多數用JSON)

如果用同步交換資料會發生在收到 response 之前都不會執行下一行程式，導致整個網頁有 JS 的地方都不會動，都在等 response 傳回來，因此才要用非同步(Asynchronous)

## 用 Ajax 與我們用表單送出資料的差別在哪？
使用 form 表單傳送 request 時，是「換頁」到瀏覽器發 request 的地方，在那裡收到 server 回傳的 response 後再做渲染，根據下圖範例，發送 request 後轉址(status code = 301)到 google.com，在此接收　response 後做渲染。
用表單的缺點是都要換頁，如果只是網頁部分內容拿資料做變動就好不須整個網頁換頁的話，就要使用 Ajax。
![](https://i.imgur.com/WtYNV3t.png?1)

## JSONP 是什麼？
JSON with Padding，是一種跨來源拿資料的方法，利用< script> 標籤不受同源政策限制的特點在裡面用 src 的方式載入 Server 端的 function，function 內容為 JavaScript 的物件裡面包含要拿取的資料，所以我們只要再設一個  callback function 就能拿到 function 回傳的內容資料。
範例:
```javascript=
//server 端
data({
    name:xxx,
    id:xxx
})
-----------------
//user 端
<script src="https://api.twitch.tv/kraken/games/top?client_id=xxx&callback=data&limit=1">
<script>
    function data(response){
        console.log(response)
    }
</script>
```
## 要如何存取跨網域的 API？
依靠 CORS 規範或 JSONP。

CORS 規範 (Cross-Origin Resource Sharing)，Server 必須在 Response 的 Header 裡面加上 `Access-Control-Allow-Origin`。

瀏覽器在收到 reponse 時會檢查 `Access-Control-Allow-Origin` 裡有無包含發 request 的 origin，有的話才會通過給 JS 拿到 response，無的話則被擋下來，JS 就無法拿到 response。

開啟 Dev tool 查看 response header 可以看到 `Access-Control-Allow-Origin:*`
`*`代表所有的 origin 都可以接受。

![](https://i.imgur.com/zrzWLy4.png)

除了這個 Header 以外，還有其他的可以用，例如`Access-Control-Allow-Headers`跟`Access-Control-Allow-Methods`。

## 為什麼我們在第四週時沒碰到跨網域的問題，這週卻碰到了？
在 week4 時我們在自己電腦上用 Node.js 透過電腦向 Server 接發 request, response，電腦對 response 來者不拒，不會有過濾把關和限制。

在 week8 時我們在瀏覽器上寫 JS透過瀏覽器向 Server 接發 request, response，瀏覽器就像大樓警衛一樣會幫我們把關 response，避免受到來路不明的惡意攻擊，所以用瀏覽器會有被擋掉 response 的可能和和其他在瀏覽器上面的限制，也因為用瀏覽器和用電腦有種種的差異性，所以根據瀏覽器的這些限制我們在 week8 才要繼續學習一些相關的規則

