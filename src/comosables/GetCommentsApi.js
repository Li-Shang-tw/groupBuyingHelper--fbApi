const version = "v18.0";
const host = "https://graph.facebook.com";
import axios from "axios";

export function useGetCommentsApi(param, accesstoken) {
  return new Promise(async (resolve, reject) => {
    //組合url
    const url = `${host}/${version}/${param}/comments?access_token=${accesstoken}`;
    try {
      const response = await axios.get(url);
      resolve(response.data.data);
    } catch (e) {
      reject(e);
    }
  });
}
