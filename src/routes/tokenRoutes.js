const Router = require("express");
const tokenController = require("../controllers/TokenController");
const validateSchema = require("../middlewares/validateSchemas.js")
const tokenSchema = require("../Schemas/tokenSchema.js");
const requiredLogin = require("../middlewares/requiredLogin");

const router = new Router();
router.post("/", validateSchema(tokenSchema.createToken), requiredLogin, tokenController.store);

module.exports = router;
