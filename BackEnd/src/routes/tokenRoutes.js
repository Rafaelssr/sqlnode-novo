const Router = require("express");
const tokenController = require("../controllers/TokenController.js");
const validateSchemas = require("../middlewares/validateSchemas.js");
const tokenSchema = require("../Schemas/tokenSchema.js");
const requiredLogin = require("../middlewares/requiredLogin.js");

const router = new Router();
router.post(
  "/",
  validateSchemas(tokenSchema.createToken),
  requiredLogin,
  tokenController.store
);

module.exports = router;
