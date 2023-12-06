export function showHashTag(hastag) {
  if (typeof hastag == "string") {
    return hastag;
  } else {
    let newHashTag = "";
    hastag.forEach((element) => {
      //處理多個商品展現，在中間加上"," 變成字串
      if (newHashTag) {
        newHashTag += ",";
        newHashTag += element;
      } else {
        //如果newHash是空的，尚未有商品，就不加上，
        newHashTag += element;
      }
    });
    return newHashTag;
  }
}
