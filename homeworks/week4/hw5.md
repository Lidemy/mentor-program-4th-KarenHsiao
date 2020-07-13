## 請以自己的話解釋 API 是什麼
一個用來交換資料的介面。

介面並不限制要在網路上，所有應用程式、資料及裝置之間都可以是一種介面用來交換資料，像是透過作業系統的 API 可以讀取檔案和做其他操作，而 USB 也是一種 API，透過 USB 可以在電腦上做資料交換。

在網路上的 API 稱為 WEB API，通常是基於 HTTP 協定，但也有 API 是透過其他種協定。要如何使用 API ? 只要將 request 送到網站提供的 API url 上就可以得到 response 拿到想要的資料，例如:使用者在訂機票的網站上輸入資訊就可以得到各家航空公司的票務資訊，這個訂機票網站就是使用 API 向各航空公司拿資料。

## 請找出三個課程沒教的 HTTP status code 並簡單介紹
1. 408 Request Timeout
請求逾時。Client 端沒有在伺服器預定的時間內完成傳送請求。
2. 409 Conflict
請求發生衝突 (通常是 PUT 請求)，如上傳的伺服器已有一個舊版本存在導致發生版本衝突。
3. 511 Network Authentication Required 
Client 端需要進行身分驗證才能獲得網路存取權限，例如連接 WIFI 熱點時。

## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

base url: http://restaurantlist.com
| 說明             | Method | path           |  參數              | 範例      |
|---------------- | ----- | -------------- | ------------------- | --------- |
| 獲取餐廳資料       | GET  |  /restaurant    | _ limit:限制回傳數量 | /restaurant?_ limit=5 |
| 獲取單一餐廳資料   | GET   | /restaurant/:id |   無               |/restaurant/5          |
| 刪除餐廳         | DELETE |/restaurant/:id  |  無                |/restaurant/5          |
| 新增餐廳         | POST   | /restaurant     | name: 餐廳名稱      |   無      |
| 更改餐聽         | PATCH  |/restaurant/:id  | name: 餐廳名稱      |    無     |

