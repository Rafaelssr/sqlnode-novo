myApp.controller("RegisterController", function ($scope, userService, $state) {
  $scope.user = {
    email: "",
    password: "",
    name: ""
  };

  console.log(11111);

  $scope.registerUser = function () {
    if (!$scope.user.email || !$scope.user.password) {
      return;
    }

    userService.createUser($scope.user).then(() => {
      $state.go("home");
    });
  };
});
