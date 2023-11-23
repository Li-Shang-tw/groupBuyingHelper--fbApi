const version = "v18.0";
const host = "https://graph.facebook.com";
import axios from "axios";

export function useGetAccountApi(param, accesstoken) {
  return new Promise(async (resolve, reject) => {
    //組合url
    const url = `${host}/${version}/${param}/accounts?access_token=${accesstoken}`;
    //發送請求
    try {
      const response = await axios.get(url);
      resolve(response.data.data);
    } catch (e) {
      reject(e);
    }
  });
}
