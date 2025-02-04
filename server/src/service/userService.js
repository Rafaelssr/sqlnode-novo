const User = require("../models/User");
class UserService {
  async createUser(data) {
    try {
      const user = await User.findOne({
        where: {
          email: data.email,
          profile_img: data.user_profileImg || null
        }
      });

      if (user) {
        throw new Error("Já existe esse usuário");
      }

      const createdUser = await User.create(data);

      return createdUser;
    } catch (error) {
      return { message: error };
    }
  }

  async listUsers() {
    try {
      const users = await User.findAll({
        where: email,
        id: id
      });

      if (!users) {
        throw new Error("Usuário não existente");
      }
      return users;
    } catch (error) {
      throw error;
    }
  }

  async getUser(id) {
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

  async updateUser(id, data) {
    try {
      const user = await User.findByPk(id);
      if (!user) {
        throw new Error("Usuário não encontrado");
      }

      const [update] = await User.update(data, {
        where: {
          id,
          email
        }
      });
      console.log(update);
      const updatedUser = await User.findByPk(id);
      return updatedUser;
    } catch (error) {
      throw error;
    }
  }

  async deleteUser(id) {
    try {
      const user = await User.findByPk(id);
      if (!user) {
        throw new Error("Usuário não encontrado");
      }
      await user.destroy();
    } catch (error) {
      return { message: error };
    }
  }
}

module.exports = new UserService();
