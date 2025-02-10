myApp.directive("customFeed", function (postService, $window) {
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

      const onExtraActionsClick = postId => {
        scope.ExtraActionsSection =
          scope.ExtraActionsSection === postId ? false : postId;
      };

      const postExclusion = function (id) {
        console.log(id, "id");
        console.log(scope.posts);
        postService.deletePost(id).then(() => {
          listPosts();
        });
	  };

      const currentUser = $window.localStorage.getItem("id");

      scope.currentUser = currentUser;
      scope.postExclusion = postExclusion;
      scope.onExtraActionsClick = onExtraActionsClick;
    }
  };
});
