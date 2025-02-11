myApp.directive("customFeed", function (postService, $window, $uibModal) {
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

      const onExtraActionsClick = (postId) => {
        scope.ExtraActionsSection =
          scope.ExtraActionsSection === postId ? false : postId;
      };

      const postExclusion = function (id) {
        postService.deletePost(id).then(() => {
          listPosts();
        });
      };

      const onEditClick = (post_id) => {

        let editPostModal = $uibModal.open({
          templateUrl: "../../views/editPost.html",
          controller: "EditPostController",
          size: "lg",
          resolve: {
            post_id
          }
        });

        editPostModal.result.then(() => {
          console.log("edit post modal closed");
        });
      };

      const currentUser = $window.localStorage.getItem("id");

      scope.onEditClick = onEditClick;
      scope.currentUser = currentUser;
      scope.postExclusion = postExclusion;
      scope.onExtraActionsClick = onExtraActionsClick;
    }
  };
});
