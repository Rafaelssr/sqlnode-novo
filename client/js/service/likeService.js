myApp.service("likeService", function ($http, $scope) {
  $scope.LikePost = (userId, postId) => {
    return $http.post(`${baseUrl}/like/${userId}/${postId}`);
  };
});
