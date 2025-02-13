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

  async show(req, res) {
    const { id: postId } = req.params;

    const likeCount = await likeService.likeCount(postId);
    return res.status(200).json({ like_count: likeCount });
  }
}

module.exports = new LikeController();
