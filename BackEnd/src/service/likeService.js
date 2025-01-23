const Like = require("../models/Likes");
const Post = require("../models/Post");

class LikeService {
  async createLike(post_id) {
    try {
      const post = await Post.findByPk(post_id);
      if (!post) {
        throw new Error("O post não existe!");
      }
      const existingLike = Like.hasOne({
        where: {
          user_id,
          post_id
        }
      });

      if (existingLike) {
        throw new Error("Você já deu um like nesse post!");
      } else {
        const like = await Like.findByPk(post_id);
        await like.create();
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteLike(post_id) {
    try {
      const post = await Post.findByPk(post_id);
      if (!post) {
        throw new Error("O post não existe.");
      }
      const existingLike = await Like.hasOne({
        where: {
          user_id,
          post_id
        }
      });
      if (!existingLike) {
        throw new Error(
          "Não é possível retirar o like quando o post não possui o mesmo."
        );
      } else {
        const like = await Like.findByPk(post_id);
        await like.destroy();
      }
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = new LikeService();
