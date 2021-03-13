## 交作業流程

1.第一次操作至 https://github.com/Lidemy/mentor-program-4th fork 一份屬於自己的 repository ，並更改 repository name 在後方鍵入自己名稱‧。
如： mentor-program-4th-WangFu 

2.接著點擊綠色按鈕 ↓Code 複製 clone URL，即可利用 git clone https://github.com/Wang-Fu-tw/mentor-program-4th-WangFu.git 到本機當中。

3.此時 cd 到 mentor-program-4th-WangFu 資料夾，務必使用 git branch 建立新的分支。
如： `git branch week1` ，接著即可以 `git checkout week1` 切換至 week1 分支。

4.確認結尾顯示為 (week1) 就可以開始寫作業。 

5.當我們做完作業且 commit 完畢，可藉由 `git remote -v` 觀看當前的 remote push 名稱及 URL ，通常名稱預設為 origin ；就可以使用 git push 上傳作業。
如： `git push origin week1` ，等待上傳。

6.上傳後在 GitHub 上，該 repository 即可看到新增的分支 week1 ，在確定看過自我檢測並審核完成後，點擊 pull request → compare & pull request → create pull request ，並繳交作業。

7.等待助教審查過後將會 merge branch week1 到 master 上，此時我們先利用 `git chekout master` 回到主線。

8.確認結尾顯示為 (master) 開始下載，利用 `git pull origin master` 同步遠端的 master 到本機裡。

9.就可以用 git branch -d week1 移除分支，至此成功完成繳交作業。