myApp.controller(
  "EditPostController",
  function ($scope, $uibModalInstance, postService) {
    const id = $scope.$resolve.post_id;

    postService.showPost(id).then((resp) => {
      $scope.post = resp.data;
    });

    $scope.editPost = () => {
      postService
        .updatePost($scope.post, id)
        .then((resp) => {
          $scope.post = resp.data.post;
          $scope.closePostModal();
          listPosts();
        })
        .catch((error) => {
          console.log(error);
        });
    };

    $scope.closePostModal = function () {
      $uibModalInstance.close("dismiss");
    };
  }
);
