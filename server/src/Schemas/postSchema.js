const yup = require("yup");

const postSchema = {
	storePost: {
		body: yup.object().shape({
			title: yup.string().max(30).required("É necessário que exista um título"),
			text: yup.string().max(300).required(),
			summary: yup.string().max(200).required(),
			likes: yup.number().integer(),
			posted_at: yup.date(),
			created_at: yup.date(),
		}).noUnknown()
	},
	updatePost: {
		body: yup.object().shape({
			title: yup.string().max(200).required("É necessário que exista um título"),
			text: yup.string().max(300).required(),
			summary: yup.string().max(200).required(),
			likes: yup.number().integer(),
			posted_at: yup.date(),
			created_at: yup.date(),
		}).noUnknown()
	},
	listPost: {
		query: yup.object().shape({
			title: yup.string(),
			text: yup.string(),
			summary: yup.string(),
			likes: yup.number().integer(),
			posted_at: yup.date(),
			created_at: yup.date(),
		})
	}

}

module.exports = postSchema;