myApp.service("LoginService", function ($http) {
  this.userLogin = (data) => {
    return $http.post(`${baseUrl}token`, data);
  };

  this.userLogOut = (data) => {
    const token = localStorage.getItem("token");
    if (!token) {
      return "O token não foi encontrado";
    }

    localStorage.removeItem("id");
    localStorage.removeItem("token");
  };
});
