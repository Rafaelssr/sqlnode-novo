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
    const post = Post.findByPk(id);
    if (!post) {
      throw new Error("O post em questão não existe.");
    } else {
      const updatedPost = Post.update(data);
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
