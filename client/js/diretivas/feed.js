myApp.directive("customFeed", function (postService) {
  return {
    restrict: "E",
    templateUrl: "../../views/feed.html",
    link: function (scope) {
      scope.posts = [];

      const init = () => {
        listPosts();
      };

      const listPosts = () => {
        postService.listPosts().then((resp) => {
          console.log(resp.data, "resp");
          scope.posts = resp.data;
        });
      };

      init();
    }
  };
});
