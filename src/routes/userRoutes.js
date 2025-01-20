const Router = require("express");
const userController = require("../controllers/UserController");
// const requiredLogin = require("../middlewares/requiredLogin");

const router = new Router();

router.post("/", userController.store); // Corrigido de "post" para "/"
router.get("/", userController.index); // Corrigido de "get" para "/"
router.get("/:id", userController.show); // Corrigido de "show/:id" para "/:id"
router.put("/:id", userController.update); // Corrigido de "put/:id" para "/:id"
router.delete("/:id", userController.delete); // Corrigido de "delete/:id" para "/:id"

module.exports = router;

// rota.post("/", middleware, controlller)
