const User = require("../models/User");
const jwt = require("jsonwebtoken");

class TokenService {
  async createToken(data) {
    try {
      const { email = "", password = "" } = data;

		const user = await User.findOne({ where: { email } });

      if (!email || !password) {
        throw new Error("Credenciais inválidas");
      }

      if (!user.validPassword(password)) {
        throw new Error("Usuário ou senha inválidos");
      } else {
        const { id } = user;
        const token = jwt.sign(
          {
            id: user.id,
            email: user.email
          },
          process.env.TOKEN_SECRET,
          {
            expiresIn: process.env.TOKEN_EXPIRATION_TIME
          }
        );

        return { token, id };
      }
    } catch (error) {
      console.log(error);
      //   throw new Error(error);
    }
  }
}

module.exports = new TokenService();
