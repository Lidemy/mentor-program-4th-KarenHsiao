## 交作業流程
### 寫作業
1. 透過 GitHub Classroom 的連結在 GitHub 上創建新的 repository (可以在 GitHub 上的 Lidemy 裡看到有自己帳號的 repository )
2. 把自己的 repository clone 到本機中 (`git clone <web的URL>`)
3. 新增一個 branch (`git branch <branch的名稱>`)
4. 切到新增的 branch 上 ( `git checkout <branch的名稱>` )  
```
注意: 寫作業的操作都要在新增的 branch 上執行
```
5. 開啟 hw 檔案開始寫功課  
### 交作業
1. 作業存檔後，需 commit (`git add.` `git commit -am "message"`) 
    * 若無 commit 的話，`git status`會看到紅字標示 modified: 檔案名稱，告訴你有某個檔案已被修改過
3. push 上 GitHub (`git push origin <branch的名稱>` )
4. 到自己的 repository 上 pull request  
    * 欲將 push 上的 branch merge 到 master，所以先發出一個請求
    * 按 "Compare & pull request"，若無此鈕出現則按 "New pull request"，再自行選擇要合併的 branch
5. 可在 pull request 頁面增加標題及訊息 (有問題可在此發問)
6. 到學習系統裡 → 作業列表 → 新增作業 → 選擇週次和貼上 pull request 的連結
### 批改後
1. GitHub 上的 branch 會 merge 到 master
2. 到本地切回 master 上，再將 GitHub 上的 master pull 下來 (遠端同步本地)
3. 本地的 branch 刪除 (`git branch -d <branch的名稱>`)


