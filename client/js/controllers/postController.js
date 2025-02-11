myApp.controller("postController", function ($scope, $state, postService) {
  const postId = $state.params.id;

  postService
    .showPost(postId)
    .then((resp) => {
      $scope.post = resp.data;
    })
    .catch((error) => {
      console.log(error);
    });
});
