myApp.controller(
  "RegisterController",
  function ($scope, userService, $state, $window) {
    $scope.user = {
      email: "",
      password: "",
      name: ""
    };

    $scope.registerUser = function () {
      if (!$scope.user.email || !$scope.user.password) {
        return ;
      }

      userService.createUser($scope.user).then(() => {
        $window.localStorage.setItem("token");
        $window.localStorage.setItem("id");
        $state.go("home");
      });
    };
  }
);
