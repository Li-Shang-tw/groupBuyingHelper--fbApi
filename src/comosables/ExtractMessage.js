export function useExtractMessage(message, type) {
  const splitMessage = message.split(" ");
  if (type == "name") {
    //例外處理 --沒有空格，沒有種類

    if (splitMessage.length === 1) {
      return message.split("+")[0];
    } else {
      return splitMessage[0];
    }
  } else if (type == "productType") {
    //當字串list長度為3(2以上)，訊息才包含種類
    if (splitMessage.length > 2) {
      return splitMessage[1];
    } else {
      return "X";
    }
  } else if (type == "number") {
    //以+分割，取得數量
    return message.split("+")[1];
  }
}
