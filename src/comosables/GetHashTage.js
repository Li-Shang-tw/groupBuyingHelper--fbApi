export function useGetHashTage(message) {
  //第一個hastage為商品名
  const hashPosition = message.indexOf("#") + 1;
  //檢查是否有第二個hastage多個商品
  const leftMessage = message.slice(hashPosition);
  if (leftMessage.includes("#")) {
    const hashTage = message.substring(hashPosition).split("#");
    //去除空格
    hashTage = hashTage.map((item) => item.trim());
    return hashTage;
  } else {
    const hashTage = message.substring(hashPosition).trim();

    return hashTage;
  }
}
