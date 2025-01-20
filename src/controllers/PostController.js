class PostController {
  async store(req, res) {
    try {
      const { title, summary, user_id, posted_at } = req.body;

      const post = await PostService.createPost(req.body);

      return res.status(200).json(post);
    } catch (error) {
      console.log(error);
      return res.status(400).json({error: error.message});
    }
  }

  async update(req, res) {
    const updatedPost = await Post.updatePost(req.body);

    return res.status(200).json(updatedPost);
  }
}

module.exports = new PostController();
