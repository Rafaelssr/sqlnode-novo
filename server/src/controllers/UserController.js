const userService = require("../service/userService");

class UserController {
  async store(req, res) { // ok
    try {
      const user = await userService.createUser(req.body);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async index(res) { // ok
    try {
      const indexUsers = await userService.listUsers();
      console.log(res, "res");
      return res.status(200).json(indexUsers);
    } catch (error) {
      throw error;
    }
  }

  async show(req, res) { // ok
    try {
      const { id } = req.params;
      const showUser = await userService.getUser(id);
      if (!showUser) {
        return res.status(400).json({
          errors: ["Usuário não encontrado"]
        });
      }
      return res.status(200).json(showUser);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async update(req, res) { // ok
    try {
      const { id } = req.params;
      const updatedUser = await userService.updateUser(id, req.body);
      return res.status(200).json(updatedUser);
    } catch (error) {
      return res.status(400).json({
        errors: ["Não foi possível atualizar o usuário"]
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const resultOfDelete = await userService.deleteUser(id);
      return {
        result: resultOfDelete,
        message: "O usuário foi deletado com sucesso!"
      };
    } catch (error) {
      return res.status(400).json({
        errors: ["Não foi possível deletar o usuário"],
        message: error.message
      });
    }
  }
}

module.exports = new UserController();
