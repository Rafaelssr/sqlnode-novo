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
            scope.posts = resp.data;
          });
        };

        init();

        const showLikeCount = (post) => {
          likeService
            .LikeCount(post.id)
            .then((count) => {
              post.post_likes = count;
              console.log(count);
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

          return likeService
            .LikePost(currentUser, postId)
            .then((likeResponse) => {
              post.isLiked = likeResponse.data.liked;
              post.post_likes = likeResponse.data.like_count;
            })
            .catch((error) => {
              console.error("Error liking post:", error);
            });
        };

        const deleteLike = function (post) {
          const postId = post.id;
          return likeService
            .DislikePost(currentUser, postId)
            .then((dislikeResp) => {
              console.log(dislikeResp, "dislikeResp");
            })
            .catch((error) => {
              console.log(error);
            });
        };

        scope.toggleLike = function (post) {
          if (post.isLiked) {
            deleteLike(post)
              .then(() => {
                post.isLiked = false;
                post.post_likes = Math.max(0, post.post_likes - 1);
                showLikeCount(post);
              })
              .catch((error) => {
                console.log("Error disliking post:", error);
              });
          } else {
            createLike(post)
              .then(() => {
                post.isLiked = true;
                post.postLikes = (post.post_likes || 0) + 1;
                showLikeCount(post);
              })
              .catch((error) => {
                console.log("Error liking post:", error);
              });
          }
        };

        scope.deleteLike = deleteLike;
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
