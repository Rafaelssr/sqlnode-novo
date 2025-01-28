const Router = require("express");
const postController = require("../controllers/PostController.js");
const requiredLogin = require("../middlewares/requiredLogin.js");
const validateSchema = require("../middlewares/validateSchemas.js");
const postSchema = require("../Schemas/postSchema.js");

const router = new Router();

router.post("/", validateSchema(postSchema.storePost), postController.store);
router.get(
  "/",
  validateSchema(postSchema.listPost),
  requiredLogin,
  postController.index
);
router.get(
  "/:id",
  validateSchema(postSchema),
  requiredLogin,
  postController.show
);
router.put(
  "/:id",
  validateSchema(postSchema.updatePost),
  requiredLogin,
  postController.update
);
router.delete("/:id", validateSchema(requiredLogin), postController.delete);

module.exports = router;
