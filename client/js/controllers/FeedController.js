myApp.controller("FeedController", function ($scope, PostService) {
  $scope.posts = [];
  PostService.getPosts()
    .then(() => {
      $scope.posts = $scope.data;
    })
    .catch((error) => {
      console.log(error);
    });
});
