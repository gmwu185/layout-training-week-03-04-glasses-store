# 前言
這是個希望以專案等級應對開發上所產出的實作，完全由最底層的 CSS 來建構全站的樣式架構。

# 做了什麼
## 格線系統
想把之前有用到的自製格線系統，發展到自適應的 web layout 上，在這過程中來回修了不少次，基於自我要求用較完整的方式來實現出觀念。
在自適應的頁面設計上本身要處理就比單一斷點的頁面比較多，在加上希望可以更近於 Adobe XD 設計稿，更在處理的細節上花了更多的心力，完整的製出格線系統也約在二週的 Adobe XD 設計稿發佈後才確任好可行性，才接著下個階段的處理。
## 自適應斷點工具樣式
在更精確了解整個站台上的字級、行高的關係，發現到整個站台要像畫面一樣是比較不可能有羅輯性來對應產出，這會使得每個字級與行高包到各自多組的樣式中，又要在對上自適應的斷點會更難有複用性，也因此才想到直接把單一的 CSS 屬性獨立抽出製成批量化的樣式，對應對不同斷點上不同的樣式字級大小與行高來使用。
## 抽出 Bootstrap 4 工具類樣式
取用 Bootstrap Scss 的工具類樣式，修改命名模式適用於整個專案中的。
## 就是要盡可能近 Adobe XD 設計稿
這樣的想法與做法也是費時的一部份，了解觀念是一回事，能透過實做落實觀念又是一回事，但能在實做的同時又能掌握處理細節處理能力，才算是達到活用的目的。
在刻意練習一書指出要成為頂尖出色的人才，練習的時間與內容就是其中一環，就算是天才若要達到出色的境界也是透過練習，唯說時間會花費較多但必定有相對的成效。

以一個容器的 `Border` 來說，上下就會差個 `2px` 了，若要達到 `1px` 也不差真的還要下不少功夫處理。

在這個專案的頁面，除了幾個斷點上的尺寸有些差異，整體來說還是辨到了 ( 不知這算不算手刻派的精神 XD )。
又尤其是 `聯名設計鏡框` 區塊更是花上了整整的一整天製作，又要配合上自製的格線系統 (`.l-container`)，一整個就是感覺自虐，超想拿出其他實做出來的成品只接把程式碼 `cmd+c` > `cmd+v` > `cmd+s` > 提交完成。
## 容器的 hover、偽類/偽元素、背景圖效果
- 最喜歡 nav 的 a tag link hover 反光效果 (符合站台主題連想的效果)。
- 課程中有提到相關效果 (more btn)。
- 滑入背景圖片放大。
## faviocn 圖示
基本的使用尺寸格規與設定認識。
## 簡單的 Scss 產出批量的 Class
Scss `@for` / `@include` / `@mixin` / `@content` ....


# 字符組
* `-`：(單中線) 相關、關連，可視為 '之' 或是 '的' 的意思，另外也用於駝峰屬性名的樣式名命，比較駝峰命名以單層為主 (較明確之意)。
* `--`：(雙中線) 後接參數或是屬性值。
  * 像是格線系統的樣式名命，使用 `--` 後視為參數調整全部幾等分之幾等分。
  * 狀態變化命名使用於像是背景設定或是 hover 效果等，與容器所使用的樣式獨立出來。
* `__`：(雙下底線) BEM 命名，用於區塊名命後的連結元素，最多不超過四層。


# 前綴與命名
* `.l` : 共用全站區塊或架構 (layout)
  * `.l-nav`、`.l-footer` 共用表頭尾樣式
  * 格線系統 `.l-col-<<斷點代號>>--<<全幾等分>>-<<之幾等分>>`
* `.p` : 特定頁面使用 (page)
* `.c` : 組件化用於多頁面使用 (components)
* `.c-js` / `.js` : 收 JavaScript 所操作組件對象或節點，另外也可視為直接由 JS 操作的樣式名稱。
* `.u` : 工具類樣式，用於調整細部架構或於 HTML 特定元素使用特定斷點等相關樣式 (utils)，與主題樣式只有依附關係所分類獨立。


# Node npm & bower 前端工具，執行指令依序輸入
- `npm install -g bower`
- `bower install`
- `npm install`
- `gulp`


# Scss 自製自適應格線系統
由單一斷點廷伸為自適應格線系統，原連結如下。
- [GitHub repos](https://github.com/gmwu185/layoutTraining-hexschool-flex)
- [GitHub pages 成品頁面](https://gmwu185.github.io/layoutTraining-hexschool-flex/index.html)
- [GitHub pages - flex grid](https://gmwu185.github.io/layoutTraining-hexschool-flex/flexGrid.html)
## mobole device: (sm)
- 視口大小：375 x 812 px
- gird：
	- 列：4 px
	- 間隔寬：20 px
	- 列寬：73 px
	- 邊距：右左 11 px
	- 總寬：375 - 11 - 11 = 353 px
> ps. footer 失算，所以列改為 8 欄，以上為 4 欄的計算方式，部份數值要 /2
## medium device: (md)
- 視口大小：768 x 1024 px
- gird：
	- 列：8 px
	- 間隔寬：24 px
	- 列寬：63 px
	- 邊距：右左 48 px
	- 總寬：768 - 48 - 48 = 672 px
## desktop device: (lg)
- 視口大小：1920 x 1280 px
- gird：
	- 列：12 px
	- 間隔寬：24 px
	- 列寬：78 px
	- 邊距：右左 360 px ( 共用 medium device 邊距設定 container outside )
	- 總寬：1296 (container-full outside 最小尺寸) - 48 - 48 = 1200 px


# 功能
- 判斷 nav 有沒有 `.js-navbar--topFixed` 樣式，若有選 `.navbar` 加入浮動視窗上部，透過 jQuery 動態加入 `.js-navbar--topFixedPush` 補上浮動高度差。
- 常見問題 jQuery 收閤選單參考助教的範例，但在觸發層因對應到 a tag 上，為了省時在節點歷遍的部份，是直接套用對應的節結構 (重點放在 CSS 處理)。


# 字級計算
## font-size & line-heigth
- 字級與字高在 RWD 版型中有著不同的設定值，雖說有卡期伯老師與助教說提依字級對應字高的倍率方式，不過要盡可能處理到精準的話可能就不太和適這樣的方式處理行高。
- 行高的處理方式會改由老師所提的 bootstrap 的全局行高設定的方式做為基本設定 (base)，另外會在透過 Scss 函式產生出較客製作的數值所產生出來的批量樣式，每量一筆就加入查看設定沒重復後就再一筆，之後用於所使用的標題或是段落上，也符合工具類樣式的特性，用於打游擊戰。
- 透過 Scss 函式來印証 @mixin `lineHeightBatch()` 與 `@mixin fontSizeBatch` 用來設計批量產出方式，`@mixin fontSizeBatch` 的函式方式較合適有羅輯性，而 `@mixin lineHeightBatch()` 比較對應到客製產出的方式。
- `@mixin lineHeightBatch()` 所對應 class name 的 `--` 後方所對應的是 `px` 數值來命名，但 css 的屬性是使用 `rem` 數值單位，由 xp 透過 scss 函式換點成 `rem`，命名以 xp 單位數值為主，主要是想不到對應的命名方式，只能用比較直觀的方式來處理 (方便對照 XD 設計稿)。

## bootstrap 標題字級與行高關倍率觀念定義全局行高
### 標題：
- `.h1`, `.h2`, `.h3`, `.h4`, `.h5`, `.h6`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`
- `line-height: 1.2;`
### 內文：
- 由 `body` 向子孫層內的相關段落做繼承，例 `P`, `li`
- `line-height: 1.5;`

## index
### Promise-Desert 2020 早春系列
- sm - fz: 16px / lh: 30px / all-h: 22px
- mb - fz: 20px / lh: 30px / all-h: 28px
- lg - fz: 36px / lh: 54px / all-h: 50px
#### 看得清，才能看得遠
- sm - fz: 32px / lh: 72px / all-h: 45px
- mb - fz: 48px / lh: 72px / all-h: 67px
- lg - fz: 64px / lh: 96px / all-h: 90px
### 用專業的心，做專業的事
- sm - fz: 24px / lh: 48px / all-h: 33px
- mb - fz: 32px / lh: 48px / all-h: 45px
- lg - fz: 48px / lh: 72px / all-h: 67px
#### 用專業的心，做專業的事 - 次標
- sm - fz: 24px / lh: 36px / all-h: 33px
- mb - fz: 20px / lh: 30px / all-h: 28px
- lg - fz: 20px / lh: 30px / all-h: 28px
### 經典系列鏡框
- sm - fz: 24px / lh: 48px / all-h: 33px
- mb - fz: 32px / lh: 48px / all-h: 45px
- lg - fz: 48px / lh: 72px / all-h: 67px
#### 經典系列鏡框 - 圖說次標
- sm - fz: 28px / lh: 42px / all-h: 33px
- mb - fz: 28px / lh: 42px / all-h: 33px
- lg - fz: 48px / lh: 72px / all-h: 57px
### 聯名設計鏡框
- sm - fz: 24px / lh: 36px / all-h: 33px
- mb - fz: 32px / lh: 48px / all-h: 45px
- lg - fz: 48px / lh: 72px / all-h: 67px
#### 聯名設計鏡框 - MORE
- sm - fz: 26px / lh: 20px / all-h: 34px
- mb - fz: 40px / lh: 30px / all-h: 53px
- lg - fz: 72px / lh: 108px / all-h: 95px
#### 聯名設計鏡框 - 產名類別 (Double A+ & YOUTH)
- sm - fz: 32px / lh: 25px / all-h: 43px
- mb - fz: 32px / lh: 25px / all-h: 43px
- lg - fz: 72px / lh: 108px / all-h: 95px
### 顧客推薦
- sm - fz: 24px / lh: 36px / all-h: 33px
- mb - fz: 32px / lh: 48px / all-h: 45px
- lg - fz: 48px / lh: 72px / all-h: 67px
### 聯絡我們
- sm - fz: 20px / lh: 48px / all-h: 28px
- mb - fz: 32px / lh: 48px / all-h: 45px
- lg - fz: 48px / lh: 72px / all-h: 60/2 (30px)
#### 勾選區
- sm - fz: 14px / lh: 21px / all-h: 42px/2 (21px)
- mb - fz: 16px / lh: 24px / all-h: 48px/2 (24px)
- lg - fz: 16px / lh: 24px / all-h: 22px


# 其他
====
## 聯名設計鏡框圖片比例
- lg - 1170/1184=0.9881756757
- md - 644/560=1.15
- sm - 704/568=1.2394366197
### 次區塊
- lg - 518/334=1.5508982036
- md - 147/77=1.9090909091
- sm - 102/53=1.9245283019