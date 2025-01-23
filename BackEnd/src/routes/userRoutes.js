const Router = require("express");
const userController = require("../controllers/UserController.js");
const requiredLogin = require("../middlewares/requiredLogin.js");
const validateSchema = require("../middlewares/validateSchemas.js");
const userSchema = require("../Schemas/userSchema.js");

const router = new Router();

router.post("/", validateSchema(userSchema.storeUser), requiredLogin, userController.store);
router.get("/", requiredLogin, userController.index);
router.get("/:id", requiredLogin, userController.show);
router.put("/:id", requiredLogin, userController.update);
router.delete("/:id", requiredLogin, userController.delete);

module.exports = router;
