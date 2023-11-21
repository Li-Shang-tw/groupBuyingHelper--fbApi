<script setup>
import axios from "axios";
const appId = 640180024991647;
const version = "v18.0";
const pageId = 165249670006517;

const host = "https://graph.facebook.com";

const url = host + `v18.0/${pageId}/feed`;

let response = await getFbApi();
let userId = response.userID;
let accessToken = response.accessToken;
console.log(response, userId, accessToken);

function getFbApi() {
  return new Promise(function (resolve, reject) {
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");

    window.fbAsyncInit = function () {
      // <!-- Initialize the SDK with your app and the Graph API version for your app -->
      FB.init({
        appId: appId,
        xfbml: true,
        version: version,
      });

      FB.login(
        function (response) {
          if (response.authResponse) {
            resolve(response.authResponse);
          } else {
            reject(response.error);
          }
        },
        {
          scope:
            "public_profile,pages_show_list,pages_read_engagement,pages_read_user_content",
        }
      );
    };
  });

  // (
  //   //變數
  //   // async function getFeed() {
  //   //   //取得貼文id
  //   //   const urlFeed = `${host}/${version}/${pageId}/feed?access_token=${accessToken}`;
  //   //   const response = await axios.get(urlFeed);

  //   //   const posts = response.data.data;
  //   //   posts.forEach(async (post, index) => {
  //   //     const urlComments = `${host}/${version}/${post.id}/comments?access_token=${accessToken}`;
  //   //     const response2 = await axios.get(urlComments);
  //   //     const commentsList = response2.data.data;
  //   //     //將comments加進對應的post
  //   //     posts[index].comments = commentsList;
  //   //   });
  //   //   console.log(posts);
  //   //   //取得貼文的留言
  //   // }
  //   // getFeed();
  //   //   .get(
  //   //     "https://graph.facebook.com/v18.0/165249670006517/feed?access_token=EAAJGPYb7X58BO24dk4ZAjicQVifZBVZCIkFxWmySc70n0tHOZCHE3YvrXDE41QNwlwrUYpQvwPdtlKhrwYmsgPXLwu6UL8n1VD7rVAyEmvX4EYu0RTEjy1pEdyiuUzKnRvBSHW5Ik5brd6mvMIjYaDZAqRejLZCKGqfGZCQEKx7au7h1Db6skSm5aqjhlbNH2nHbmTVZABahgSEcZBIFZB4KnNt6jE"
  //   //   )
  //   //   .then(function (response) {
  //   //     // handle success
  //   //     console.log(response);
  //   //   })
  //   //   .catch(function (error) {
  //   //     // handle error
  //   //     console.log(error);
  //   //   });
  //   function (d, s, id) {
  //     var js,
  //       fjs = d.getElementsByTagName(s)[0];
  //     if (d.getElementById(id)) {
  //       return;
  //     }
  //     js = d.createElement(s);
  //     js.id = id;
  //     js.src = "https://connect.facebook.net/en_US/sdk.js";
  //     fjs.parentNode.insertBefore(js, fjs);
  //   }
  // )(document, "script", "facebook-jssdk");

  // window.fbAsyncInit = function () {
  //   // <!-- Initialize the SDK with your app and the Graph API version for your app -->
  //   FB.init({
  //     appId: appId,
  //     xfbml: true,
  //     version: version,
  //   });
  //   //-----page feed-----

  //   // <!-- If you are logged in, automatically get your name and email adress, your public profile information -->
  //   FB.login(
  //     function (response) {
  //       if (response.authResponse) {
  //         console.log("Welcome!  Fetching your information.... ");
  //         // console.log(response.authResponse);
  //         userId = response.authResponse.userId;
  //         accessToken = response.authResponse.accessToken;
  //         FB.api("/me", { fields: "name, email" }, function (response) {
  //           document.getElementById("profile").innerHTML =
  //             "Good to see you, " +
  //             response.name +
  //             ". i see your email address is " +
  //             response.email;
  //         });
  //       } else {
  //         //  <!-- If you are not logged in, the login dialog will open for you to login asking for permission to get your public profile and email -->
  //         console.log("User cancelled login or did not fully authorize.");
  //       }
  //     },
  //     {
  //       scope:
  //         "public_profile,pages_show_list,pages_read_engagement,pages_read_user_content",
  //     }
  //   );
  // };
  // console.log(userId);
}

{
  /* getFbApi(); */
}
// 取得account
</script>

<template>
  <div id="profile"></div>
</template>

<style scoped></style>
