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

      const onExtraActionsClick = (post_id) => {
       scope.ExtraActionsSection = scope.ExtraActionsSection === post_id ? false : post_id;
	   console.log("Toggle dropdown for post:", post_id, "New State:", scope.ExtraActionsSection);
      };

		const postExclusion = function () {
			postService.deletePost().then(() => {
				console.log(post);
			})
		}
		scope.onExtraActionsClick = onExtraActionsClick;
		scope.postExclusion = postExclusion;
    }
  };
});
