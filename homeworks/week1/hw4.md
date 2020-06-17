## 跟你朋友介紹 Git
### 什麼是 Git ?
**Git 是一個版本控制的軟體。**
1. 協助你管理不同版本的檔案
2. 當要做新功能或改 bug 時，可以在 branch 上進行，保留原本穩定的版本，等 branch 上新功能 OK 了或 bug 解決了再合併到原版本
3. 基於第二點 branch 的概念，可以多人協作開發   

### Git 基本觀念
**Git 分為 Local (本地) 和 Remote (遠端) 兩個環境**  

Git 是分散式版本控制軟體 (另一種為中央式，一次一個開發者工作)，開發者們可以自行在本地離線工作，有需要時在靠網路 push 上遠端，也可以從遠端 pull 下程式碼開發。   

在本地中又分為 **working directory（工作資料夾）、staging area（暫存區）和 repositories（檔案庫）**，一般流程會先在工作資料夾中開發，在工作資料夾裡的檔案還未被 git 版本控制 (狀態為 untracked)，所以我們要再將檔案加進暫存區中，在暫存區裡的檔案才有被版本控制 (狀態為 tracked)，沒問題後再 commit 到檔案庫裡，最後在 push 上遠端。  

repository（檔案庫）簡稱 repo。一般每個專案都會有各自的 repo，同一專案的資料會放在同一個 repo 底下，而要建 repo 就是開一個資料夾，並初始化`git init` 這個資料夾。  

![](https://static.coderbridge.com/img/techbridge/images/kdchang/cs101/git-workflow.png)
(來源: [Git 與 Github 版本控制基本指令與操作入門教學](https://blog.techbridge.cc/2018/01/17/learning-programming-and-coding-with-python-git-and-github-tutorial/))

### Git 基本指令 (本地端)

#### 1. `git init` 版本控制初始化
* 切換到要做版本控制的目錄，下指令`git init` 
* 產生一個 .git 的檔案，代表 Git 開始做版本控制，此檔案內包含做版本控制時需要的東西
* 如果不要繼續版本控制可將 .git 檔案刪除  

#### 2 `git status` 查看目前狀況
* 極常用的指令，有事沒事都看一下目前狀況  

#### 3. `git add` 將檔案加進暫存區
* `git add` 加一個檔案
* `git add .` 加現在位置裡的全部檔案
* `git rm --cached <檔案>` 將暫存區檔案移回工作資料夾 (tracked 變 untracked)  

#### 4. `git commit` 新建一個版本 (加入到本地的 repo)
* `git commit` 會跳出 vim 視窗輸入版本訊息 (訊息太常適合此指令在 vim 裡編輯)
* `git commit -m "版本訊息"` 省略 vim 直接輸入訊息
* `git commit --amend` 更改 commit 訊息 


若有檔案被修改過，`git status` 會看到 modified : 檔案，要再 commit 時需重新 add 才能 commit

若多個檔案被修改要一次一次 add 太慢，可用`git commit -am` 一次完成 (把所有修改檔案 commit)

BUT !!! 在工作區 untracked 的檔案不會有變動，untracked 需用 add

#### 5. `git log` commit 的歷史紀錄
* 查看所有 commit 的詳細紀錄
* `git log --oneline` 簡短的紀錄  
* `git log <檔案>` 查看特定檔案的 commit 紀錄
* `git log -p <檔案>` 查看特定檔案的 commit 紀錄和修改內容
* `git log --author="人名\|人名\|人名...."` 檢視特定作者(一位或多位)的 commit
* `git log --grep="string"` 查看有特定字串的 commit
* ` git log --since="時間" --until="時間"` 檢視此段時間內的 commit

#### 6. `git checkout` 回到某個 commit 版本 / 切到某 branch
* `git checkout master` 回到最新 commit / 回到 master  

## `.gitignore` 要忽略的檔案
* 建一個 `.gitignore` 的檔案，將要忽略的檔名寫在 `.gitignore` 裡面

### Branch 分支

#### 1. `git branch <branch name>` 新增分支

#### 2. `git branch -v` 查看目前分支狀況 (在哪一個分支上)

#### 3. `git branch -d <branch name>` 刪除分支

若勿刪分支要救回時，可用 `git reflog` 找出此分支最後一個版本的版本號
再執行`git branch <branch name> <版本號>`


#### 4. `git checkout <branch name>` 切換到其他分支
* `git checkout master` 切換到 master

#### 5. `git branch -m <new branch name>` 更改目前所在的分支名稱

### Merge 合併

#### 1. `git merge <branch name>` 將分支合併進目前的分支上
* 合併完確認無誤可以將分支刪掉

合併前請確認自己目前所在分支
合併前請確認修改過的檔案都有被重新 add 和 commit


### Conflict 衝突
合併時有可能會發生衝突，因為在**同檔案的同一行都同時被修改到**，git 會不知道該用哪一個檔案，因此我們要手動解決衝突

1. 衝突發生時出現以下訊息，也可查看 status，開啟有衝突的檔案 (hello.txt)

    ![](https://i.imgur.com/o3QQ4MO.png)

    ![](https://i.imgur.com/P2d3vU3.png?1)

2. 修改要保留的內容，不要的刪掉，最後存檔。
從 <<< HEAD 到 === ，代表 最新 commit 裡衝突檔案的內容。從 === 到 >>> test，代表此 test 分支裡衝突檔案的內容

    ![](https://i.imgur.com/fG6weR5.png)
3. 下`git commit -am "訊息"`指令 (修改後的檔案要記得再 add 和 commit)
4. 合併且解決衝突成功，產生一個最新 commit

### 各種狀況應對
#### 1. 修改 commit message `git commit --amend`
* 會跳出 vim 視窗在裡面修改
* 如果已經 commit 而且又 push 到遠端了，這種情形下在 local 端改的話會造成其他人的困擾。因此在 push 之前先檢查，避免錯的東西被放到遠端。

#### 2. 回到上一個 commit (目前的 commit 不要了) `git reset HEAD^`
* `HEAD` 為最新的 commit，`^` 是上一個的意思
* 也可用`git reset <版本號>`達到相同結果
* `git reset` 分為三種模式，soft、mixed 和 hard，預設為 mixed 模式。三種模式的差異請看下圖。
* 可以這樣用: `git reset --soft HEAD^` `git reset --hard <版本號>`  

![](https://i.imgur.com/Q0KLXks.png)

#### 3. 還沒 commit 但修改過的檔案想復原 `git checkout -- <檔案>`

#### 4. 修改 branch 名稱 `git branch -m <new branch name>`

### GitHub 是什麼 ?
當你要多人合作時就要在雲端有一個存放 repository 的地方，供大家下載和上傳程式碼，而這個地方就是 GitHub (除了 GitHub 還有其他相同功能的平台可使用，如: GitLab 與 Bitbucket)，在這裡有各種開源專案，你可以下載使用也可以參與其中一起開發，達成共同創作的概念。

### 如何使用 GitHub ?
#### 1. 在 GitHub 上建立一個遠端 repo
* 新增 repo，並填寫相關訊息
* 輸入指令加一個遠端的 repo (GitHub 會提供位址)
* 輸入指令將本地檔案 push 上遠端

![](https://i.imgur.com/HCDgzg0.png)
#### 2. 檔案更新到遠端 (更新前本地記要再 commit 一次)
* `git push origin master` 將檔案 (最新的 commit)push 到遠端
* `git push origin <branch name>` 將新分支 push 到遠端

新分支 push 上遠端時，要按"Compare & pull request"，此功能除了發出 request 還可以看到 branch 與 master 的檔案差別和其他詳細內容，因此在遠端合併比在本地方便。
要合併的話按 "Merge pull request"，就可以將 branch 合併到 master，在刪除 branch


#### 3. 遠端的檔案 pull 到本地
* 可以直接在遠端上修改檔案，GitHub 會再幫你 commit

![](https://i.imgur.com/SJZ0QAs.png?1)

* `git pull origin master` 從遠端 pull 下 master，有可能會發生衝突
* 解決衝突後，再 push 上遠端讓遠端同步 

#### 4. 如何使用別人的 repo ?
若只是自己在本地修改使用，只要 pull 下來即可，但若要 push 上遠端，那自己的遠端也要有 repo，不然是空的無法 push 上去
#### **將別人的 repo pull 到本地**
* 按綠色按鈕 "Clone or download"
* 第一種方法，直接 Download
* 第二種方法，使用 SSH，`git clone <SSH>`

![](https://i.imgur.com/eHG7Owa.png?1)

##### **自己的遠端也要有一份別人的 repo**
* 按 "Fork"，自己的帳號下就會有一份別人的 repo
* 可以在自己帳號下的 repo clone 到本地使用

![](https://i.imgur.com/1OOcdXR.png)

這裡的 clone 是整個專案的檔案全部 clone 到本地
和 pull master 不一樣，pull master 只有 master
所以要用別人的 repo 時不能只有 pull master 


### Work flow
#### 1. 有功能改變或修改 bug 時，開一個新 branch
#### 2. 確認修改完畢後再 push (`git push origin <branch>`)
#### 3. 按 "Comepare & pull request"
#### 4. 可以和其他成員一起討論檔案內容
#### 5. merge 完後，刪掉遠端 branch
#### 6. 回到本地，將最新版 master pull 到本地`git pull origin master` (遠端同步本地)
#### 7. 刪掉本地 branch