myApp.controller("HomeController", function ($scope, $http, $location, $document) {
  $scope.showProfileDropDown = false;
  $scope.onWriteClick = function () {
    console.log("icon");
  };

  $scope.onProfileClick = function () {
    $scope.showProfileDropDown = !$scope.showProfileDropDown;
	  console.log("flag state:", $scope.showProfileDropDown);
  };
  $document.on("click", function (event) {
    let isClickedInside = event.target.closest(".doca-dropdown-menu, .fa-user");
    if (!isClickedInside) {
      $scope.$apply(function () {
        $scope.showProfileDropDown = false;
      });
    }
  });
});
