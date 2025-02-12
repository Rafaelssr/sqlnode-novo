const Like = require("../models/Likes");
const Post = require("../models/Post");
const User = require("../models/User");

class LikeService {
  async createLike(userId, postId) {
    const post = await Post.findOne({
      where: {
        deleted_at: null
      },
      include: [
        {
          model: User,
          as: "user",
          attributes: ["name", "profile_img"]
        }
      ]
    });
    if (!post) {
      throw new Error("O post não existe!");
    }

    const existingLike = Like.findOne({
      where: {
        user_id: userId,
        post_id: postId
      }
    });

    if (existingLike) {
      throw new Error("Você já deu um like nesse post!");
    } else {
      const like = await Like.findByPk(postId);
      await like.create();
    }
  }

  async deleteLike(post_id) {
    const post = await Post.findByPk(post_id);
    if (!post) {
      throw new Error("O post não existe.");
    }
    const existingLike = Like.findOne({
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
  }
}

module.exports = new LikeService();
