myApp.service("postService", function ($http) {
  const userToken = localStorage.getItem("token");

  this.createPost = (data) => {
    return $http.post(`${baseUrl}post`, data);
  };

  this.listPosts = () => {
    return $http.get(`${baseUrl}post`, {
      headers: {
        Authorization: `Bearer ${userToken}`
      }
    });
  };
});
