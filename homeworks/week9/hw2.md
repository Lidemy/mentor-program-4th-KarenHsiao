## 資料庫欄位型態 VARCHAR 跟 TEXT 的差別是什麼
varchar 可以設定最大字符長度，但 text 不可以。
varchar 使用時機為知道大概長度時用，text 多用來存字元很多的資料，像是文章。

## Cookie 是什麼？在 HTTP 這一層要怎麼設定 Cookie，瀏覽器又是怎麼把 Cookie 帶去 Server 的？
是一個小型文字檔，由 server 暫存在使用者電腦上的檔案，讓 server 辨識使用者的電腦。
當瀏覽器發 request 到 server，server 會在 response header 裡的 `Set-Cookie` 裡帶資訊再回傳給瀏覽器，這個 cookie 會存在瀏覽器內或是硬體裡，當下次瀏覽器再造訪相同網站時，會將 cookie 自動帶到 request 裡發給 server，server 就會以 cookie 裡的資訊做辨識，送出特定的網頁內容給瀏覽器。

## 我們本週實作的會員系統，你能夠想到什麼潛在的問題嗎？
如果資料庫整個被駭，那裡面的資料也都會被拿到做利用。 

