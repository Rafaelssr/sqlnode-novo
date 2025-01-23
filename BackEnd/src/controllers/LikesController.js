const likeService = require("../service/likeService");

class LikeController {
  async store(req, res) {
    try {
      const { id } = req.params;
      const like = await likeService.createLike(id);
      return res.status(200).json({ like });
    } catch (error) {
      return res.status(400).json({
        message: error
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const deletedLike = await likeService.deleteLike(id);
		return res.stauts(200).json({ deletedLike });
    } catch (error) {
      return res.status(400).json({
        message: error
      });
    }
  }
}

module.exports = new LikeController();
