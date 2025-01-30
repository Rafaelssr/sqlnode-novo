myApp.service("userService", function ($http) {
  this.createUser = (data) => {
    return $http.post(`${baseUrl}users`, data);
  };
});
