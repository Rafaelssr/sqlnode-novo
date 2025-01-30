const Router = require("express");
const tokenController = require("../controllers/TokenController.js");

const SchemaValidator = require("../middlewares/schemaValidator.js");
const schemaValidator = new SchemaValidator();

const tokenSchema = require("../Schemas/tokenSchema.js");

const router = new Router();

router.post("/", schemaValidator.validate(tokenSchema.createToken), tokenController.store);

module.exports = router;
