``` js
function isValid(arr) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] <= 0) return 'invalid'
  }
  for(var i=2; i<arr.length; i++) {
    if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
  }
  return 'valid'
}

isValid([3, 5, 8, 13, 22, 35])
```

## 執行流程
1. 執行第 3 行，設定變數 i 是 0，檢查 i 是否 <陣列長度 6，是，繼續執行，開始進入第一圈迴圈
2. 執行第 4 行，判斷 arr[0] 3 是否 <= 0，不是，繼續往下
3. 第一圈迴圈結束，跑回第 3 行，i++，i 變成 1，檢查是否 <陣列長度 6，是，繼續執行
4. 執行第 4 行，判斷 arr[1] 5 是否 <= 0，不是，繼續往下
5. 第二圈迴圈結束，跑回第 3 行，i++，i 變成 2，檢查是否 <陣列長度 6，是，繼續執行
6. 執行第 4 行，判斷 arr[2] 8 是否 <= 0，不是，繼續往下
7. 第三圈迴圈結束，跑回第 3 行，i++，i 變成 3，檢查是否 <陣列長度 6，是，繼續執行
8. 執行第 4 行，判斷 arr[3] 13 是否 <= 0，不是，繼續往下
9. 第四圈迴圈結束，跑回第 3 行，i++，i 變成 4，檢查是否 <陣列長度 6，是，繼續執行
10. 執行第 4 行，判斷 arr[4] 22 是否 <= 0，不是，繼續往下
11. 第五圈迴圈結束，跑回第 3 行，i++，i 變成 5，檢查是否 <陣列長度 6，是，繼續執行
12. 執行第 4 行，判斷 arr[5] 35 是否 <= 0，不是，繼續往下
14. 第六圈迴圈結束，跑回第 3 行，i++，i 變成 6，檢查是否 <陣列長度 6，不是，離開迴圈

15. 執行第 6 行，設定變數 i 是 2，檢查 i 是否 <陣列長度 6，是，繼續執行，開始進入第一圈迴圈
16. 執行第 7 行，判斷 arr[2] 8 是否 != arr[1] 5 + arr[0] 3，不是，繼續往下
17. 第一圈迴圈結束，跑回第 6 行，i++，i 變成 3，檢查是否 <陣列長度 6，是，繼續執行
18. 執行第 7 行，判斷 arr[3] 13 是否 != arr[2] 8 + arr[1] 5，不是，繼續往下
19. 第二圈迴圈結束，跑回第 6 行，i++，i 變成 4，檢查是否 <陣列長度 6，是，繼續執行
20. 執行第 7 行，判斷 arr[4] 22 是否 != arr[3] 13 + arr[2] 8，是，回傳‘invalid'字串
21. 執行完畢