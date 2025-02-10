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

  this.showPost = (postId) => {
    return $http.get(`${baseUrl}post/${postId}`);
  };

  this.deletePost = (postId) => {
    return $http.delete(`${baseUrl}post/${postId}`, auth);
  };
});
