const postService = require("../service/postService");

class PostController {
	async store(req, res) {
	try {
		const post = await postService.createPost(req.body);
		console.log(createPost);
		return res.status(200).json(post);
	} catch (error) {
		console.log(error);
		return res.status(400).json({ error: error.message });
	}
	}

	async index() {
	try {
		const indexPost = await postService.listPosts();
		return res.status(200).json({ indexPost });
	} catch (error) {
		console.log(error)
		return res.status(400).json({ message: error });
	}
	}

	async update(req) {
	try {
		const updatedPost = await postService.updatePost(req.body);
		return updatedPost;
	} catch (error) {
		console.log(error);
	}
	}
}

module.exports = new PostController();
