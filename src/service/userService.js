const User = require("../models/User");

class UserService {
  async createUser(info) {
    // funcionando como esperado
	  try {
      const createdUser = await User.create(info);
      if (!createdUser) {
        throw new Error("Não foi possível criar o usuário");
      }

      return createdUser;
    } catch (error) {
      console.log(error);
      return { message: error };
    }
  }

  async listUsers() {
    // funcionando como esperado
    try {
      const users = await User.findAll();
      if (!users) {
        throw new Error("Não foi possível listar os usuários");
      }
      return users;
    } catch (error) {
      throw error;
    }
  }

  async getUser(id) {
    // fucionando como esperado
    try {
      const user = await User.findByPk(id);

      if (!user) {
        throw new Error("Não foi possível buscar o usuário");
      }

      return user;
    } catch (error) {
      return { message: error };
    }
  }

  async updateUser(id, info) {
    // funcionando como esperado
    try {
      const user = await User.findByPk(id);
      if (!user) {
        throw new Error("Usuário não encontrado");
      }

      const updatedUser = await User.update(info);
      return updatedUser;
    } catch (error) {
      return { message: error };
    }
  }

  async deleteUser(id) {
    // funcionando como esperado
    try {
      const user = await User.findByPk(id);
      if (!user) {
        throw new Error("Usuário não encontrado");
      }
      console.log(user);
      await user.destroy();
    } catch (error) {
      return { message: error };
    }
  }
}

module.exports = new UserService();
