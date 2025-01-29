myApp.controller("LoginController", function ($scope, LoginService) {
  $scope.user = {
    email: "",
    password: ""
  };

  $scope.login = function () {
    if (!$scope.user.email || !$scope.user.password) {
      console.log("pooow");
      alert("Email ou senha válido");
      return;
    }
    console.log($scope);

    LoginService.userLogin($scope.user)
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  };
});
