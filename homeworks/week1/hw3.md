## 教你朋友 CLI

1.首先我們要有個認知，平時我們能用滑鼠、觸控流暢地操作電腦，都是工程師將晦澀的機器語言轉化製作為人們方便可操作的介面。
以前的電腦也都沒有圖形化視窗，那我們要怎麼操作電腦呢？就是利用 CLI ──── Command Line ，透過文字下達命令，進而達到操作電腦的目的。

2.Windows 內建的命令提示字元 (CMD) 就是一種 CLI 的介面，不過我們需要更多功能所以可以透由下載 Git ，內部附帶一個強大好用的 CLI 軟體──── Git Bash

3.我們要如何執行應用程式呢？就如同我們在視窗介面上操作，打開桌面上 Chrome 瀏覽器上網：
我的電腦 → 本磁碟機(C:) → Users → MyName → Desktop → Chrome.exe-捷徑
所以首先，我們要知道我們身處在哪，我們可以在 Git Bash 中鍵入 `pwd` ，螢幕就會顯示我們的所在，例如方才的桌面：

``` bash
MyName@LAPTOP-26U0KHMK MINGW64 ~/Desktop
$ pwd
/c/Users/MyName/Desktop
```

4.那我想去別的地方，比如 D 槽看我的收藏呢？我們會用到另一個指令 `cd` ，在 Git Bash 中鍵入 `cd d:` 我們就可以找到 d 槽了：

``` bash
MyName@LAPTOP-26U0KHMK MINGW64 ~/Desktop
$ cd d:

MyName@LAPTOP-26U0KHMK MINGW64 /d
$ 
如此我們就可以在資料夾間來回穿梭了。
```

5.但我們沒有視窗我怎麼知道這裡有什麼呢？這裡就不得不提 `ls`，在 Git Bash 中鍵入 `ls` ：

``` bash
MyName@LAPTOP-26U0KHMK MINGW64 /d
$ ls
 secret/                   Backup/                        怕.jpg'
```

6.最後還可以使用 `help` 查詢各種指令。期待你的發現！