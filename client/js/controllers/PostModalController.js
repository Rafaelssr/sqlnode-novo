myApp.controller("PostModalController", function ($scope, $http, $state) {
	$scope.closePostModal = function () {
		$uibModal.close();
	};
	$scope.dismiss = function () {
		$uibModal.dismiss('cancel');
	}
});
