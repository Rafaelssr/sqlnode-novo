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

  this.updatePost = (data) => {
    return $http.put(`${baseUrl}post`, data, auth);
  };

  this.deletePost = (data) => {
    return $http.delete(`${baseUrl}post/${post.id}`, data, auth);
  };
});
