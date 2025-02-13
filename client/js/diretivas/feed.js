myApp.directive("customFeed", [
  "postService",
  "likeService",
  "$window",
  "$uibModal",
  function (postService, likeService, $window, $uibModal) {
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

        const showLikeCount = (post) => {
          likeService
            .LikeCount(post.id)
            .then((count) => {
              post.post_likes = count;
              debugger;
            })
            .catch((error) => {
              console.error("Error fetching like count:", error);
            });
        };

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

        const createLike = function (post) {
          const postId = post.id;

          likeService
            .LikePost(currentUser, postId)
            .then((likeResponse) => {
              console.log(likeResponse);
              post.isLiked = likeResponse.data.liked;
              post.post_likes = likeResponse.data.like_count;
            })
            .catch((error) => {
              console.error("Error liking post:", error);
            });
        };

        scope.showLikeCount = showLikeCount;
        scope.createLike = createLike;
        scope.onEditClick = onEditClick;
        scope.currentUser = currentUser;
        scope.postExclusion = postExclusion;
        scope.onExtraActionsClick = onExtraActionsClick;
      }
    };
  }
]);
