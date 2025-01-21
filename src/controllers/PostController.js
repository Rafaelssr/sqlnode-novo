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

  async index() {
    try {
      const indexPost = await postService.listPosts();
      return res.status(200).json({ indexPost });
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.body;
      const post = await postService.showPost(id);
      return res.status(200).json({ post });
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async update(req) {
    try {
      const updatedPost = await postService.updatePost(req.body);
      return updatedPost;
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }

  async delete(id) {
    try {
      const deletedPost = await postService.deletePost(id);
      return res.status(200).json({ deletedPost });
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }
}

module.exports = new PostController();
