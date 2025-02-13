const postService = require("../service/postService");

class PostController {
  async store(req, res) {
    try {
      const post = await postService.createPost(req.body);

      return res.status(200).json(post);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async index(req, res) {
    try {
      const indexPost = await postService.listPosts();

      return res.status(200).json(indexPost);
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const post = await postService.showPost(id);
      return res.status(200).json({ post });
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;
      const updatedPost = await postService.updatePost(id, data);
      return updatedPost;
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  }

  async delete(req, res) {
    try {
      const postId = req.params.id;

      const deletedPost = await postService.deletePost(postId);
      return res.status(200).json({ deletedPost });
    } catch (error) {
      console.log(error);
      return res.status(403).json(error);
    }
  }
}

module.exports = new PostController();
