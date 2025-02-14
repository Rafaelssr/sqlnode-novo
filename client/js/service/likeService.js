myApp.service("likeService", function ($http) {
  const baseUrl = "http://localhost:3001/";
  const userToken = localStorage.getItem("token");

  const auth = {
    headers: {
      Authorization: `Bearer ${userToken}`
    }
  };

  this.LikePost = (userId, postId) => {
    return $http.post(`${baseUrl}like/${postId}`, { userId }, auth);
  };

  this.LikeCount = (postId) => {
    return $http.get(`${baseUrl}like/${postId}`);
  };

  this.DislikePost = (userId, postId) => {
    return $http.delete(`${baseUrl}like/${postId}`, { userId }, auth);
  };
});
