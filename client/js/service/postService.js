myApp.service("postService", function ($http) {
  const userToken = localStorage.getItem("token");

  const auth = {
    headers: {
      Authorization: `Bearer ${userToken}`
    }
  };

  this.createPost = (data) => {
    return $http.post(`${baseUrl}post`, data, auth);
  };

  this.listPosts = () => {
    return $http.get(`${baseUrl}post`, auth);
  };

  this.updatePosts = (data) => {
    return $http.put(`${baseUrl}post`, data, auth);
  };
});
