# 團購小幫手- FB 貼文訂單彙整

Vue3建立的 SPA ,串接 Graph API(META) 取得使用者的貼文與留言，整理成訂單表格，並能匯出EXCEL檔。

![image](https://github.com/Li-Shang-tw/groupBuyingHelper--fbApi/assets/41882910/83512bcc-64dd-43e1-9967-df0157d56f5c=300x200)


## 專案緣起
我常在 FB 社團上團購商品，觀察到因為團購可以用更低的價格提供實用與新奇的商品，所以 FB 社團上的團購風氣興盛。

## 解決痛點
當我去取貨時，我發現到許多的團購主都是用手抄或是人工的方式將訂購資訊輸入Excel檔案中，這個單調無趣的作業會消耗掉團購主大量的精力與時間，而且失誤率也高。所以讓我興起了建立可以自動取得 FB 貼文的內容，並且自動整理成訂單表格的念頭。

## Build With
- Vue 3
- vite
- pinia
- Graph API(META)
- axios
- luxon
- xlsx
- Tailwind CSS

## 技術Highlight
- 使用 Graph API 的 SDK 實現 login與取得相關 API  的 access permission
- 使用 axios 向Graph API 請求，取得粉絲專頁、貼文、留言內容
- 用 JavaScript 將貼文與留言內容整理成訂單的表格
- 用 luxon 處理時間，實現按照時間排序的功能
- 用 xlsx 套件，將訂單(貼文總覽)與訂單詳情(留言內容)的資料匯出Excel檔  
  

## 發布貼文的規則
- 在貼文中，在hastag標記團購的商品名稱，這在整理出的表單會做為商品名稱的來源
- 要求客戶以 [ 姓名 +1] 或是 [ 姓名 商品類型 +1]的方式留言，並提醒如果用第二種方式留言，記得姓名與商品類型要有空格。



## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
