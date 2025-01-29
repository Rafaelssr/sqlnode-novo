const Router = require("express");

const userController = require("../controllers/UserController.js");
const SchemaValidator = require("../middlewares/schemaValidator.js");

const userSchema = require("../Schemas/userSchema.js");
const requiredLogin = require("../middlewares/requiredLogin.js");

const router = new Router();
const schemaValidator = new SchemaValidator();

router.post(
  "/",
  schemaValidator.validate(userSchema.storeUser),
  userController.store
);
router.get("/", requiredLogin, userController.index);
router.get("/:id", requiredLogin, userController.show);
router.put("/:id", requiredLogin, userController.update);
router.delete("/:id", requiredLogin, userController.delete);

module.exports = router;
