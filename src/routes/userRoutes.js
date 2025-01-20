const Router = require("express");
const userController = require("../controllers/UserController");
const requiredLogin = require("../middlewares/requiredLogin");

const router = new Router();

router.post("/", userController.store); // Corrigido de "post" para "/"
router.get("/", requiredLogin, userController.index); // Corrigido de "get" para "/"
router.get("/:id", requiredLogin, userController.show); // Corrigido de "show/:id" para "/:id"
router.put("/:id", requiredLogin, userController.update); // Corrigido de "put/:id" para "/:id"
router.delete("/:id", requiredLogin, userController.delete); // Corrigido de "delete/:id" para "/:id"

module.exports = router;

