const postService = require('../models/Post');
const { createPost } = require('../service/postService');

class PostController {
  async store(req, res) {
    try {
      const post = await postService.createPost(req.body);
      console.log(createPost);
      return res.status(200).json(post);
    } catch (error) {
      console.log(error);
      return res.status(400).json({error: error.message});
    }
  }

  async update(req) {
    try {
      const updatedPost = await Post.updatePost(req.body);
      return updatedPost;
    } catch (error) {
      console.log(error)
    }

  }
}

module.exports = new PostController();
