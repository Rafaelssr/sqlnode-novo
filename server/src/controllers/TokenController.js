const tokenService = require("../service/tokenService");

class TokenController {
	async store(req, res) {
		try {
			const token = await tokenService.createToken(req.body);
			return res.status(200).json(token);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	}
}
module.exports = new TokenController();
