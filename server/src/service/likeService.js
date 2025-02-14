const Like = require("../models/Likes");
const Post = require("../models/Post");
const User = require("../models/User");

class LikeService {
  async createLike(userId, postId) {
    const post = await Post.findOne({
      where: {
        id: postId
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

    const like = await Like.findOne({
      where: {
        user_id: userId,
        post_id: postId
      },
      attributes: ["id", "user_id", "post_id", "is_deleted"]
    });

    if (!like) {
      const newLike = await Like.create({
        user_id: userId,
        post_id: postId,
        is_deleted: false
      });

      console.log("like criado");
      if (newLike) {
        await post.increment("likes", { by: 1 });
      }
    }

    const likeCount = await Like.count({
      where: { post_id: postId, is_deleted: false }
    });

    return {
      like_count: likeCount
    };
  }

  async deleteLike(postId) {
    const post = await Post.findByPk(postId);

    if (!post) {
      throw new Error("O post não existe.");
    }
    console.log(postId, "post id");
    const like = await Like.findOne({
      where: {
        post_id: postId,
        is_deleted: false
      }
    });

    if (like) {
      await like.update({ is_deleted: true });
      await post.decrement("likes", { by: 1 });
      console.log("like existe");
    }
  }

  async likeCount(postId) {
    const count = await Like.count({
      where: {
        post_id: postId
      }
    });

    return count;
  }
}

module.exports = new LikeService();
