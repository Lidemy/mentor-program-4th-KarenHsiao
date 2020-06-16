## 請解釋後端與前端的差異。
### 前端  
* 網頁的畫面，如: 內容、排版、圖片 
* 與使用者的互動，如: 按鈕、連結
### 後端  
* 存取和處理資料
* 伺服器的運行

## 假設我今天去 Google 首頁搜尋框打上：JavaScript 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。
* 瀏覽器透過作業系統和網路卡向 DNS 詢問 Google的位址，得到位址後再發 Request 到 Google server，Google server 再到自己的 Data base 找資料
* Google server 回傳 Response 給網路卡、作業系統和瀏覽器，最後呈現畫面和內容給使用者看到  

![圖片](https://i.imgur.com/vDufwAW.png)



## 請列舉出 3 個「課程沒有提到」的 command line 指令並且說明功用
1. `<指令> --help` 查詢指令的功能 (我的電腦沒有 man 指令)
2. `rm -i` 刪除前再確認一次
3. `find -name 檔案` 搜尋在此目錄下的檔案
    * `find -type d -name 資料夾` 搜尋在此目錄下的資料夾
    * `find -name "*.檔案類型"`搜尋在此目錄下所有此檔案類型的檔案

