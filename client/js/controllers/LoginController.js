myApp.controller("LoginController", function ($scope, LoginService) {
  $scope.user = {
    email: "",
    password: ""
  };
	
  const login = () => {
	  if (!$scope.user.email || !$scope.user.password) {
		console.log('pooow')
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

  $scope.login = login;
});
