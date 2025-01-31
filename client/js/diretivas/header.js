myApp.directive("customHeader", function () {
  return {
    restrict: "E",
    templateUrl: "../../views/header.html",
    link: function (scope) {
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
          if (result) {
            $state.go("login");
            localStorage.clear();
          }
        });
      };
      scope.logOut = logOut;
    }
  };
});
