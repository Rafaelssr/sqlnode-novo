const Router = require("express");
const postController = require("../controllers/PostController.js");
const requiredLogin = require("../middlewares/requiredLogin.js");

const SchemaValidator = require("../middlewares/schemaValidator.js");
const schemaValidator = new SchemaValidator();

const postSchema = require("../Schemas/postSchema.js");

const router = new Router();

router.post(
  "/",
  schemaValidator.validate(postSchema.storePost),
  requiredLogin,
  postController.store
);

router.get(
  "/",
  schemaValidator.validate(postSchema.listPost),
  requiredLogin,
  postController.index
);

router.get(
  "/:user_id",
  schemaValidator.validate(postSchema.listPost),
  requiredLogin,
  postController.show
);

router.put(
  "/:id",
  schemaValidator.validate(postSchema.updatePost),
  requiredLogin,
  postController.update
);
router.delete("/:id", postController.delete);

module.exports = router;
