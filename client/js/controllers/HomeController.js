myApp.controller("HomeController", function ($scope, $http, $location) {
  $scope.showModal = false;
  $scope.onWriteClick = function () {
    console.log("icon");
  };

  $scope.onProfileIconClick = function () {
    $scope.showModal = !$scope.showModal;
	  console.log("flag state:", $scope.showModal);
  };
});
