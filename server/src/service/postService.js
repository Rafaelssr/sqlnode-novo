const Post = require("../models/Post");
class PostService {
  async createPost(data) {
    try {
      console.log(data);
      const newPost = await Post.create(data);
      return newPost;
    } catch (error) {
      return { error };
    }
  }

  async listPosts(id, user_id) {
    if (!id) {
      throw new Error("o id para listagem do post não existe");
    } else if (!user_id) {
      throw new Error("O usuário não existe.");
    } else {
      return await Post.findAll(id);
    }
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
