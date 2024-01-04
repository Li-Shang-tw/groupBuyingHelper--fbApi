export function useGetHashTage(message) {
  //第一個hastage為商品名
  const hashPosition = message.indexOf("#") + 1;
  //檢查是否有第二個hastage多個商品
  const leftMessage = message.slice(hashPosition);
  if (leftMessage.includes("#")) {
    let hashTag = message.substring(hashPosition).split("#");
    //去除空格
    hashTag = hashTag.map((item) => item.trim());
    return hashTag;
  } else {
    const hashTag = message.substring(hashPosition).trim();

    return hashTag;
  }
}
