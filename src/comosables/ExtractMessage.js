export function useExtractMessage(message, type) {
  const splitMessage = message.split(" ");
  if (type == "name") {
    return splitMessage[0];
  } else if (type == "productType") {
    //當字串list長度為3(2以上)，訊息才包含種類
    if (splitMessage.length > 2) {
      return splitMessage[1];
    } else {
      return "X";
    }
  } else if (type == "number") {
    //當字串list長度為3
    if (splitMessage.length < 2) {
      return splitMessage[2];
    }
    //當字串list長度為2
    else if (splitMessage.length == 2) {
      return splitMessage[1];
    }
  }
}
