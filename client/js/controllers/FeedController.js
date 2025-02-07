myApp.controller("FeedController", function ($scope, PostService) {
  $scope.posts = [];
  PostService.listPosts()
    .then(() => {
      $scope.posts = $scope.data;
    })
    .catch((error) => {
      console.log(error);
    });

});
