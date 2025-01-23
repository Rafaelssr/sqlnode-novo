const Router = require("express");
const router = new Router();
const validateSchemas = require("../middlewares/validateSchemas");
const likeSchema = require("../Schemas/likeSchema");
const requiredLogin = require("../middlewares/requiredLogin");
const LikesController = require("../controllers/LikesController");

router.post("/like", validateSchemas(likeSchema), requiredLogin, LikesController.store);
router.delete("/dislike", validateSchemas(likeSchema), requiredLogin, LikesController.delete);

module.exports = router;
