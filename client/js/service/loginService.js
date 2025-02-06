myApp.service("LoginService", function ($http, $state) {
  this.userLogin = (data) => {
    return $http.post(`${baseUrl}token`, data);
  };

  this.userLogOut = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      return { message: "O token não foi encontrado" };
    }

    localStorage.removeItem("id");
    localStorage.removeItem("token");
    $state.go("login");
  };
});
