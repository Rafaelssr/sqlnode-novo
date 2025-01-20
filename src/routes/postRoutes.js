const Router = require("express");
const postController = require("../controllers/PostController");
const requiredLogin = require('../middlewares/requiredLogin');

const router = new Router();

router.post("/", postController.store);

module.exports = router;
