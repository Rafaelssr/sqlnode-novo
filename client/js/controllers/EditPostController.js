myApp.controller(
  "EditPostController",
  function ($scope, $uibModalInstance, postService) {
    const id = $scope.$resolve.post_id;

    postService.showPost(id).then((resp) => {
      $scope.post = resp.data;
      console.log($scope.post);
    });

    $scope.editPost = () => {
      debugger;
      postService
        .updatePost($scope.post, id)
        .then((resp) => {
          $scope.post = resp.data.post;
          console.log($scope.post);
          $scope.closePostModal();
          listPosts();
        })
        .catch((error) => {
          console.log(error);
        });
    };

    $scope.closePostModal = function () {
      $uibModalInstance.close();
      console.log("postModalClosed");
    };
  }
);
