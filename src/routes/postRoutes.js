const Router = require("express");
const postController = require("../controllers/PostController");
const requiredLogin = require("../middlewares/requiredLogin");

const router = new Router();

router.post("/", postController.store);
router.get("/", requiredLogin, postController.index);
router.get("/:id", requiredLogin, postController.show);
router.put("/:id", requiredLogin, postController.update);
router.delete("/:id", requiredLogin, postController.delete);

module.exports = router;
