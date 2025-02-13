const Like = require("../models/Likes");
const Post = require("../models/Post");
const User = require("../models/User");

class LikeService {
  async createLike(userId, postId) {
    console.log(userId, "id of user");
    console.log(postId, "id do post");

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

    const existingLike = await Like.findOne({
      where: {
        user_id: userId,
        post_id: postId
      },
      attributes: ["id", "user_id", "post_id"]
    });

    if (!existingLike) {
      console.log("criou novo like");
      await Like.create({
        user_id: userId,
        post_id: postId,
        is_deleted: false
      });

      await post.increment("likes", { by: 1 });
    }
    console.log(existingLike, "existingLike");
    if (existingLike && existingLike.is_deleted) {
      await existingLike.update({ is_deleted: false });
      await post.increment("likes", { by: 1 });
    } else {
      console.log("like nao tava deletado");
      await existingLike.update({ is_deleted: true });
      await post.decrement("likes", { by: 1 });
    }

    const likeCount = await Like.count({
      where: { post_id: postId, is_deleted: false }
    });

    return {
      like_count: likeCount
    };
  }

  async likeCount(postId) {
    const count = await Like.count({
      where: {
        post_id: postId
      }
    });
    console.log(count);
    return count;
  }
}

module.exports = new LikeService();
