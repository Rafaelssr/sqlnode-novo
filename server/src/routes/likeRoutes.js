const Router = require("express");
const router = new Router();

const SchemaValidator = require("../middlewares/schemaValidator.js");
const schemaValidator = new SchemaValidator();

const likeSchema = require("../Schemas/likeSchema");
const requiredLogin = require("../middlewares/requiredLogin");
const LikeController = require("../controllers/LikesController");

router.post(
  "/:id",
  schemaValidator.validate(likeSchema.storeLike),
  requiredLogin,
  LikeController.store
);

router.delete("/:id", requiredLogin, LikeController.delete);

router.get("/:id", LikeController.show);

module.exports = router;
