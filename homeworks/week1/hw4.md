## 跟你朋友介紹 Git

為甚麼我們需要版本控制：

a.我想大家都有過報告勘誤修改的經驗，往往改了又改，最後的檔名已經變成了────無敵進化最終版999.doc 。

b.每當你的改動涉及刪除，你就得多存一個版本，以免再進版又需要該刪去的章節或是圖片。

c.當你想呈現多種方案，不再是單一主線的版本，又該如何分門別類。

d.事過境遷，我要如何知道我的每個版本做了什麼改動？

e.當多人協作時，我的改動如何避免覆蓋與被覆蓋、又如何規避銜接錯誤版本？

所以我們就需要一個強大的版本控制工具──── Git

1.首先我們開啟 Git Bash ，在你決定開啟版本控制的目錄下，鍵入 `git init` 。
此時該目錄將會出現一個新的隱藏資料夾 .git

``` bash
	MyName@LAPTOP-26U0KHMK MINGW64 ~/Downloads/test
	$ git init
	Initialized empty Git repository in C:/Users/MyName/Downloads/test/.git/
```

2.我們可以透過 `git status` 確認當前版本狀態的得知；

	a.版本控制項新增哪些未註冊檔案
	
``` bash
		Changes to be committed:
			(use "git restore --staged <file>..." to unstage)
				new file:   new-add.txt
```			
	
	每當我們新建想控制的檔案，就可以利用 `git add filename`	將其加入版本控制項，此時 `git status` 顯示新檔案已做好等待註冊的準備。

	b.版本控制項修改了哪些檔案等待註冊
	
``` bash
		Changes not staged for commit:
			(use "git add <file>..." to update what will be committed)
			(use "git restore <file>..." to discard changes in working directory)
				modified:   code.js
```		
	
	當我們對已註冊檔案修改時， `git status` 將會顯示那些檔案修改過且需要更新註冊。
	
	c.非控制項有那些檔案
	
``` bash
		Untracked files:
			(use "git add <file>..." to include in what will be committed)
				test.txt
``` 
	
	有些檔案其實不需要跟隨版本控制，在沒有 `git add` 之下， `git status` 顯示那些沒有參與版本控制的檔案。
	P.S. 可以建立一個固定名稱的檔案 .gitignore ，並在其中填入不參與版本控制的檔案名稱，此時系統便會自動忽略該檔案，但要注意 .gitignore 是需要 `add git .gitignore` 加入版本控制的。

3.透過 `git commit -am "last version" 註冊新版本，其中雙引號的內容可自由註記，我們可在此註解該版本做了那些升級或改動。

``` bash
	MyName@LAPTOP-26U0KHMK MINGW64 ~/Downloads/test (master)
	$ git commit -am "last version"
	warning: LF will be replaced by CRLF in note.txt.
	The file will have its original line endings in your working directory
	[master a8ec76d] last version
	1 file changed, 1 insertion(+)
```

4.當我們要查閱版本紀錄時，利用 `git log` 即可顯示過往版本及其 commit 與註解。

``` bash
	MyName@LAPTOP-26U0KHMK MINGW64 ~/Downloads/test (master)
	$ git log
	commit a8ec76d795b54e73701bc87ba90a334209fe6ff6 (HEAD -> master)
	Author: MyName <MyName@gmail.com>
	Date:   Sun Mar 14 00:13:03 2021 +0800

		latest version

	commit 60159be740b9c17b300dda90bdd4a84a196244d2
	Author: MyName <MyName@gmail.com>
	Date:   Sun Mar 14 00:11:23 2021 +0800

		2nd

	commit 8fd597e1d11495fc94f6266dafcc589737e19c03
	Author: MyName <MyName@gmail.com>
	Date:   Sat Mar 13 23:42:40 2021 +0800

		first
```
	
5.此時我可以利用 `git checkout 60159be740b9c17b300dda90bdd4a84a196244d2` 來回到 2nd 版本，所有控制項檔案就會回到當時 2nd 版本的狀態。

``` bash
	MyName@LAPTOP-26U0KHMK MINGW64 ~/Downloads/test (master)
	$ git checkout 60159be740b9c17b300dda90bdd4a84a196244d2
	Note: switching to `60159be740b9c17b300dda90bdd4a84a196244d2`.
```

若需要回到最新版本，透由鍵入 `git checkout master` 即可。

``` bash
	MyName@LAPTOP-26U0KHMK MINGW64 ~/Downloads/test ((a8ec76d...))
	$ git checkout master
	Switched to branch `master`
```

6.當我們需要建立版本分支時，透過 `git branch newone` 來新建一個名為 newone 的分支。

``` bash
	MyName@LAPTOP-26U0KHMK MINGW64 ~/Downloads/test ((a8ec76d...))
	$ git branch newone
```	

7.透過 `git branch -v` 查閱所有分支，系統也會以 * 號顯示當前所在分支。

``` bash
	MyName@LAPTOP-26U0KHMK MINGW64 ~/Downloads/test (master)
	$ git branch -v
	* master a8ec76d last version
	  newone a8ec76d last version
```	  
	  
8.使用 `git checkout newone` 就可以切換到 newone 分支。

``` bash
	MyName@LAPTOP-26U0KHMK MINGW64 ~/Downloads/test (master)
	$ git checkout newone
	Switched to branch `newone`
```	
	
若需要回到最主線 master ，透由鍵入 `git checkout master` 即可。

``` bash
	MyName@LAPTOP-26U0KHMK MINGW64 ~/Downloads/test (newone)
	$ git checkout master
	Switched to branch `master`
```	
	
9.若我已完成改動，想將 newone 合併回主線 master ，可使用 `git merge newone` 務必注意該命令是將目標分支「合併回」當前所在分支。

``` bash
	MyName@LAPTOP-26U0KHMK MINGW64 ~/Downloads/test (master)
	$ git merge newone
	Updating a8ec76d..02fbb03
	Fast-forward
	code.js | 1 +
	1 file changed, 1 insertion(+)
```
	
10.最後，我們可以使用 `git brancd -d newone` 移除 newone 分支。

``` bash
	MyName@LAPTOP-26U0KHMK MINGW64 ~/Downloads/test (master)
	$ git branch -d newone
	Deleted branch newone (was 02fbb03).
```