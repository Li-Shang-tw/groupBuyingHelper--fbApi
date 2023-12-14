const version = "v18.0";
const host = "https://graph.facebook.com";
import axios from "axios";

export function useGetPostsApi(param, accessToken) {
  return new Promise(async (resolve, reject) => {
    //組合url
    const url = `${host}/${version}/${param}/feed?access_token=${accessToken}&limit=25`;
    //發送請求
    try {
      const response = await axios.get(url);
      resolve(response.data.data);
    } catch (e) {
      reject(e);
    }
  });
}
