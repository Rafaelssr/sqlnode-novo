myApp.directive("customHeader", function ($document, $uibModal, LoginService) {
  return {
    restrict: "E",
    templateUrl: "../../views/header.html",
    link: function (scope) {
      scope.showProfileDropDown = false;
      const logOut = () => {
        scope.loading = false;
        Swal.fire({
          title: "log out?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085D6",
          cancelButtonColor: "#d33",
          confirmButtonText: "yes"
        }).then((result) => {
          if (result.isConfirmed) {
            LoginService.userLogOut();
          }
        });
      };

      const onProfileClick = () => {
        scope.showProfileDropDown = !scope.showProfileDropDown;
      };

      const onWriteClick = () => {
        let uibModalInstance = $uibModal.open({
          templateUrl: "../../views/writePost.html",
          controller: "PostModalController",
          size: "lg"
        });

        uibModalInstance.result.then(
          () => {
            console.log("write post modal closed");
          },
          () => {
            console.log("write post cancelled");
          }
        );
      };

      const closeDropdown = function (event) {
        const dropdown = document.querySelector(".fa-user");
        const profileButton = document.getElementById("profile");

        if (dropdown && profileButton) {
          if (
            !dropdown.contains(event.target) &&
            !profileButton.contains(event.target)
          ) {
            scope.showProfileDropDown = false;
            scope.$apply(); // $apply : revisa alterações feitas no scope
          }
        }
      };

      $document.on("click", closeDropdown);
      $document.on("scroll", closeDropdown);

      const openUserPosts = function () {
        console.log("pooow");
      };

      scope.logOut = logOut;
      scope.onWriteClick = onWriteClick;
      scope.onProfileClick = onProfileClick;
      scope.openUserPosts = openUserPosts;
    }
  };
});
