<template>
  <button
    @click="exportToExcel(data, mode)"
    class="bg-green-500 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer"
  >
    匯出Excel
  </button>
</template>

<script setup>
//取得xlsx
import * as XLSX from "xlsx/xlsx.mjs";
//接收props
const props = defineProps(["data", "mode"]);
//取的props的變數
const data = props.data;
const mode = props.mode;

function exportToExcel(data, mode) {
  //====all=============
  if (mode === "all") {
    //淺拷貝data
    const allData = [...data];
    //製作第一份sheet的資料postsTable
    const postsTable = [];
    //第一列為標題
    const firstRow = ["ID", "貼文時間", "貼文內容", "留言數", "商品類"];
    postsTable.push(firstRow);
    //第二列之後為資料陣列
    allData.forEach((item, index) => {
      //複製item，並將comments改成數字
      const newItem = { ...item, comments: item.comments.length || 0 };
      //移除貼文的id，以免跟ID混淆
      delete newItem.id;
      //當hashage是陣列，轉成字串
      if (Array.isArray(newItem.hastage)) {
        newItem.hastage = newItem.hastage.join(",");
      }
      //item的value的陣列
      const row = Object.values(newItem);
      row.unshift(index + 1);
      postsTable.push(row);
    });

    // 建立一個新的空的工作簿
    const wb = XLSX.utils.book_new();
    //-------第一個sheet------------
    // 將資料轉換為工作表
    const ws = XLSX.utils.aoa_to_sheet(postsTable);
    // 將工作表添加到工作簿中，並為該工作表命名
    XLSX.utils.book_append_sheet(wb, ws, "貼文總覽表");

    //-----comments的sheet----------------
    allData.forEach((post, index) => {
      //製作第二份sheet的資料commentsTable
      const commentsTable = [];
      //第一列為標題
      const firstRow = ["買家", "留言時間", "種類", "數量"];
      commentsTable.push(firstRow);
      //第二列之後為資料陣列
      post.comments.forEach((comment) => {
        //從留言的訊息中取得買家名稱與數量--留言格式為"買家名稱 + 數量" 或 "買家名稱 種類  + 數量"
        const messageList = comment.message.split("+");

        //檢查是否有種類
        if (messageList[0].match(" ")) {
          //有種類
          const [buyer, variety] = messageList[0].split(" ");
          const quantity = messageList[1];
          const row = [buyer, comment.created_time, variety, quantity];
          commentsTable.push(row);
        } else {
          //沒有種類
          const buyer = messageList[0];
          const quantity = messageList[1];
          const row = [buyer, comment.created_time, "", quantity];
          commentsTable.push(row);
        }
        // 將資料轉換為工作表
      });
      // 將資料轉換為工作表
      const ws = XLSX.utils.aoa_to_sheet(commentsTable);
      //幫工作表命名
      const sheetName = `${post.hastage}留言總覽表-${index + 1}`;
      // 將工作表添加到工作簿中，並為該工作表命名
      XLSX.utils.book_append_sheet(wb, ws, sheetName);
    });
    // 將工作簿寫入到文件
    const exportFile = "全部post資料.xlsx";
    XLSX.writeFile(wb, exportFile);
    alert(`Excel file "${exportFile}" has been created.`);
    //====post=============
  } else if (mode === "post") {
    const commentsTable = [];
    //post的資訊
    const postProduct = data.hastage;
    const postMessage = data.message;
    const postCreatedTime = data.created_time;
    //第一列為post的資訊
    const postTitleRow = ["商品名稱", "貼文內容", "貼文時間"];
    const postRow = [postProduct, postMessage, postCreatedTime];
    commentsTable.push(postTitleRow);
    commentsTable.push(postRow);
    //中間留白
    commentsTable.push([]);
    //comment標題
    const commentTitleRow = ["ID", "買家", "留言時間", "種類", "數量"];
    commentsTable.push(commentTitleRow);
    //comment資料陣列
    data.comments.forEach((comment, index) => {
      //從留言的訊息中取得買家名稱與數量--留言格式為"買家名稱 + 數量" 或 "買家名稱 種類  + 數量"
      const messageList = comment.message.split("+");

      //檢查是否有種類
      if (messageList[0].match(" ")) {
        //有種類
        const [buyer, variety] = messageList[0].split(" ");
        const quantity = messageList[1];
        const row = [index + 1, buyer, comment.created_time, variety, quantity];
        commentsTable.push(row);
      } else {
        //沒有種類
        const buyer = messageList[0];
        const quantity = messageList[1];
        const row = [index + 1, buyer, comment.created_time, "無", quantity];
        commentsTable.push(row);
      }
    });

    // 建立一個新的空的工作簿
    const wb = XLSX.utils.book_new();
    // 將資料轉換為工作表
    const ws = XLSX.utils.aoa_to_sheet(commentsTable);
    //工作表的名稱
    const sheetName = `${postProduct}訂單表`;
    // 將工作表添加到工作簿中，並為該工作表命名
    XLSX.utils.book_append_sheet(wb, ws, sheetName);
    // 將工作簿寫入到文件
    const exportFile = "post資料.xlsx";
    XLSX.writeFile(wb, exportFile);
    alert(`Excel file "${exportFile}" has been created.`);
  }
}
</script>

<style scoped></style>
