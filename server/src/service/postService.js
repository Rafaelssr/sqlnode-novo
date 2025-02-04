const Post = require("../models/Post");
const User = require("../models/User");

class PostService {
  async createPost(data) {
    try {
      const newPost = await Post.create(data);
      return newPost;
    } catch (error) {
      return { error };
    }
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
      include: [
        {
          model: User,
          as: "user"
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
