myApp.controller(
  "LoginController",
  function ($scope, LoginService, $window, $state) {
    $scope.user = {
      email: "",
      password: ""
    };

    $scope.showLoginAlert = false;

    $scope.login = function () {
      if (!$scope.user.email || !$scope.user.password) {
        $scope.showLoginAlert = true;
        return;
      }
      // html -> controller (frontEnd) -> service (frontend) -> routes -> controller (backEnd) -> service (backend) -> database

      $scope.showLoginAlert = false;
      LoginService.userLogin($scope.user)
        .then((resp) => {
          console.log($scope.user);
          $window.localStorage.setItem("id", resp.data.id);
          $window.localStorage.setItem("token", resp.data.token);

          $state.go("home");
        })
        .catch((error) => {
          console.log(error);
          throw new Error("Error logging in :", error);
        });
    };
  }
);
