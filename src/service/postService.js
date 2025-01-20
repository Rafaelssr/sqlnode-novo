const { Post } = require("../models/Post");

class PostService {
    async createPost(info) {
        if (!info.title && !info.text) {
            res.status(400).json({
                errors: [ 'Título e texto obrigatórios para os posts' ]
            })
        }

        const alredyExistingPost = await Post.findOne({
            where: {id: info.id, user_id: info.user_id}
        })
        if (alredyExistingPost) {
            throw new Error("Esse post já existe")
        }
        return await Post.createPost(info);
    }
    async indexPost(id, user_id) {
        if (!id) {
            throw new Error("o id para listagem do post não existe")
        } else if (!user_id) {
            throw new Error("O usuário não existe.")
        }
        else {
            return await PostService.findOne(id);
        }
    }
    async updatePost(id, user_id) {
        if (!id) {
            throw new Error("O post em questão não existe.")
        } else if (!user_id) {
            throw new Error("O usuário desse post não existe.")
        } else {
            return await Post.updatePost(id, user_id);
        }
    }

    async deletePost(id) {
        const post = await Post.findByPk(id)
        if (!post) {
            throw new Error("o post não existe para que possa ser deletado.")
        }

        await post.destroy()
        return { message: 'O post foi deletado com sucesso.' };
    }
}


module.exports = new PostService();