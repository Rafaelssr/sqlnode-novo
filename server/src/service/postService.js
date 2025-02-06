const Post = require("../models/Post");
const User = require("../models/User");

class PostService {
  async createPost(data) {
    if (!data.post_thumbnail) {
      data.post_thumbnail = "https://placehold.co/600x400";
    }

    const { title, text, summary, post_thumbnail, user_id } = data;
    const newPost = await Post.create({
      title,
      text,
      summary,
      post_thumbnail,
      user_id
    });

    return newPost;
  }

  async showPost(user_id) {
    const post = await Post.findOne({
      where: {
        user_id
      }
    });

    return post;
  }

  async listPosts() {
    const posts = await Post.findAll({
      where: { deleted_at: null },
      include: [
        {
          model: User,
          as: "user",
          attributes: ["name", "profile_img"]
        }
      ],
      nest: true,
      logging: true
    });

    return posts;
  }

  async updatePost(id, data) {
    const post = await Post.findByPk(id);
    if (!post) {
      throw new Error("O post em questão não existe.");
    } else {
      const updatedPost = await Post.update(data, {
        where: {
          id
        }
      });
      return updatedPost;
    }
  }

  async deletePost(id) {
    const post = await Post.findByPk(id);
    if (!post) {
      throw new Error("o post não existe para que possa ser deletado.");
    }

    await post.destroy();
    return { message: "O post foi deletado com sucesso!" };
  }
}

module.exports = new PostService();
