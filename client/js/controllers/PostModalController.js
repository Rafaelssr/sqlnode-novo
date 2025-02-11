myApp.controller(
  "PostModalController",
  function ($scope, $uibModalInstance, postService) {
    const user_id = localStorage.getItem("id");

    $scope.post = {
      user_id,
      title: "",
      text: "",
      summary: "",
      post_thumbnail: ""
    };

    $scope.closePostModal = function () {
      $uibModalInstance.close();
    };

    $scope.dismiss = function () {
      $uibModalInstance.dismiss("cancel");
    };

    $scope.publishPost = function () {
      console.log($scope.post);
      if (!$scope.post) {
        return;
      }

      postService
        .createPost($scope.post)
        .then(() => {
          $scope.closePostModal();
          listPosts();
        })
        .catch((error) => {
          console.log(error);
        });
    };
  }
);
