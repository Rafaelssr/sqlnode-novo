const likeService = require("../service/likeService");

class LikeController {
  async store(req, res) {
    try {
      const { id: postId } = req.params;
      const { userId } = req.body;
      const like = await likeService.createLike(userId, postId);
      return res.status(200).json(like);
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        message: error
      });
    }
  }

  async delete(req, res) {
    try {
      const { postId } = req.params;
      const { userId } = req.query;
      console.log(req.query, "req.query");
      console.log(req.params, "req.params");
      const deletedLike = await likeService.deleteLike(userId, postId);
      console.log(deletedLike);
      return res.stauts(200).json(deletedLike);
    } catch (error) {
      return res.status(400).json({
        message: error
      });
    }
  }

  async show(req, res) {
    const { id: postId } = req.params;
    const likeCount = await likeService.likeCount(postId);
    return res.status(200).json({ like_count: likeCount });
  }
}

module.exports = new LikeController();
