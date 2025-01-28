myApp.service("LoginService", function ($http) {
  this.userLogin = (info) => {
    try {
      return $http.post(`${baseUrl}token`, info);
    } catch (error) {
      console.log(error);
    }
  };
});
