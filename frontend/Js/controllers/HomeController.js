myApp.controller("HomeController", function ($scope, $http, $location) {

  $scope.onWriteClick = function () {
    console.log("icon");
  };

	$scope.isProfileModalOpen = false;
  $scope.onProfileIconClick = function () {
	  $scope.isProfileModalOpen = !$scope.isProfileModalOpen;
  };

});


