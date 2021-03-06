## 教你朋友 CLI
因為我是心地善良聰明好心不可多得的好朋友，所以我來寫教學囉 !
### 什麼是 command line ?
使用純文字直接對電腦下指令的使用者介面
另一種為圖形使用者介面 (Graphical User Interface)，簡稱 GUI，即為我們慣用滑鼠點擊各圖形來操控電腦。
### 如何建資料夾並在裡面開新檔案 ?
1. 打開終端機，並在終端機裡輸入以下指令
2. 進入要將資料夾存放的位置:
    * `pwd` 印出目前位置
    * `cd ..` 回上一層 
    * `cd` 進入下一層
3. 建資料夾 wifi : `mkdir wifi`
4. 進入 wifi 資料夾裡 : `cd wifi`
5. 建新檔案 afu.js : `touch afu.js`  
以上就完成你的需求囉 !

### 基本指令
#### 1. `pwd` 印出目前所在位置  

#### 2. `ls` 列出目前所在位置底下的檔案
   * `ls -a` 列出隱藏檔案
   * `ls -l` 列出詳細資料
   * `ls -al` 列出隱藏檔案 + 詳細資料
   * `ls *.檔案類型` 列出所有此檔案類型的檔案
#### 3. `cd` 切換資料夾、路徑
   * `cd ..` 回到上一層
   * `cd /` 到跟目錄(電腦最底層)
   * `cd ~` 回到 home 目錄 (使用者層，/Users/username)
#### 4. `<指令> --help` 查詢指令功能  

## 檔案操作相關指令
#### 1. `touch <檔名>` 建立檔案或更改檔案時間(若已有此檔案時)  

#### 2. `mkdir <資料夾名稱>` 建立新資料夾  

#### 3. `rm` 刪除檔案 ( ++注意: 刪除是直接刪除，不會到垃圾桶，請小心使用 !++)
   * `rmdir` 刪除"空"資料夾
   * `rm -r` 刪除整個資料夾，包含資料夾內的檔案
   * `rm -i` 刪除前詢問是否要刪除，以免手滑誤刪
   * `rm -ir` 會依序詢問此資料夾內的檔案是否要刪除  
   
> 若刪除檔案的檔名有特殊字元或空白時可用單引號括起來
> 例如: rm '檔 名 &'  
  
#### 4. `mv` 移動檔案或更改檔名
   * `mv test.txt 123.txt` 將 test.txt 重新命名為 123.txt
   * `mv test.txt <路徑>`
>路徑分為絕對路徑和相對路徑
>
#### 5. `cp <檔案> <複製檔案的新檔名>` 複製檔案
   * `cp -r <資料夾> <複製資料夾的新名稱>` 複製資料夾  
## 指令的組合
#### 1. `<前指令> | <後指令>` pipe，將前指令的輸出當作後指令的輸入  
例如: `cat 123.txt | grep i` 列出 123 內容，在此輸出搜尋 "i"  

#### 2. `>` redirection，輸入/輸出 重新導向
   例如: `echo "hello" > 123.txt` 將 "hello" 寫進 123.txt 裡面
   本來輸出會在 Terminal 上呈現，但`>` 將輸出結果重新導向 123.txt 檔案裡
   * `echo "" >` 覆蓋所有內容
   * `echo "" >>` 新增

## 其他
#### 1. `cat <檔案>` 印出此檔案的內容
   * `cat -n <檔案>` 印出++有行號++的檔案內容 
> 若檔案內容太多不易看時，可使用`more` 或 `less` 一頁一頁的翻看
> 詳細使用方法可看[此篇文章的 6.3.2](http://linux.vbird.org/linux_basic/0220filemanager.php#file_content_1)

#### 2. `grep <字串> <檔案>` 在檔案內容裡搜尋字串並印出 
   * `grep --color` 搜尋的字串會標記顏色 

#### 3. `curl` 送出 request，顯示 response 的資訊
   * `curl -I` 顯示更多完整的 response 資訊

