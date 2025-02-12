myApp.controller("ViewPostController", function ($scope, $state, postService) {
  $scope.post = [];
  const postId = $state.params.id;
  postService
    .showPost(postId)
    .then((resp) => {
		$scope.post = resp.data.post;
    })
    .catch((error) => {
      console.log(error);
    });
});
