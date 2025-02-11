const Router = require("express");
const router = new Router();

const SchemaValidator = require("../middlewares/schemaValidator.js");
const schemaValidator = new SchemaValidator();

const likeSchema = require("../Schemas/likeSchema");
const requiredLogin = require("../middlewares/requiredLogin");
const LikesController = require("../controllers/LikesController");

router.post(
  "/like",
  schemaValidator.validate(likeSchema.storeLike),
  requiredLogin,
  LikesController.store
);

router.delete(
  "/dislike",
  schemaValidator.validate(likeSchema.deleteLike),
  requiredLogin,
  LikesController.delete
);

module.exports = router;
