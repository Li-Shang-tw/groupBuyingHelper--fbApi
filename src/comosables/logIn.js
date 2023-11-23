const version = "v18.0";

export function useLogIn(appId) {
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
}
