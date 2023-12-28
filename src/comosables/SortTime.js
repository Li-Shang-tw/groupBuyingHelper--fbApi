//import luxon來處理時間
import { DateTime } from "luxon";

export function useSortTime(posts, order) {
  let newPosts = [...posts];

  newPosts.forEach((post, index) => {
    newPosts[index]["created_time"] = DateTime.fromISO(post["created_time"]);
  });

  //從小到大
  if (order === "asc") {
    newPosts.sort(function (a, b) {
      return a["created_time"] - b["created_time"];
    });
    //從大到小
  } else if (order === "desc") {
    newPosts.sort(function (a, b) {
      return b["created_time"] - a["created_time"];
    });
  }

  //將時間變回字串
  newPosts.forEach((post, index) => {
    newPosts[index]["created_time"] = post["created_time"].toISO();
  });
  return newPosts;
}
