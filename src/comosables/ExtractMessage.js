export function useExtractMessage(message, type) {
  //給預設值，避免沒有message時，出現錯誤
  const splitMessage = message.split(" ") || [];

  switch (type) {
    case "name":
      //例外處理 --沒有空格，沒有種類
      return splitMessage.length === 1
        ? message.split("+")[0]
        : splitMessage[0];
    case "productType":
      return splitMessage.length > 2 ? splitMessage[1] : "X";
    case "number":
      return message.split("+")[1];
    default:
      return "X";
  }
}
