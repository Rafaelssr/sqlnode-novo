const User = require("../models/User");
class UserService {
  async createUser(data) {
    const user = await User.findOne({
      where: {
        email: data.email
      }
    });
    console.log(user, "user");
    if (user) {
      throw new Error("Já existe esse usuário");
    }

    if (!data.profile_img) {
      data.profile_img =
        "https://www.vecteezy.com/vector-art/2318271-user-profile-icon";
    }

    const createdUser = await User.create({
      name: data.name,
      email: data.email,
      password: data.password,
      profile_img: data.profile_img
    });

    console.log(createdUser);
    return createdUser;
  }

  async listUsers() {
    const users = await User.findAll({
      where: email,
      id: id
    });

    if (!users) {
      throw new Error("Usuário não existente");
    }
    return users;
  }

  async getUser(id) {
    const user = await User.findByPk(id);

    if (!user) {
      throw new Error("Não foi possível buscar o usuário");
    }

    return user;
  }

  async updateUser(id, data) {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    const [update] = await User.update(data, {
      where: {
        id
      }
    });
    console.log(update);
    const updatedUser = await User.findByPk(id);
    return updatedUser;
  }

  async deleteUser(id) {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error("Usuário não encontrado");
    }
    await user.destroy();
  }
}

module.exports = new UserService();
