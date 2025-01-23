const User = require("../models/User");
const jwt = require("jsonwebtoken");

class TokenController {
  async store(req, res) {
    try {
      console.log(req, "req");
      const { email = "", password = "" } = req.body;

      const user = await User.findOne({
        where: {
          email
        }
      });

      if (!user) {
        res.status(401).json({
          errors: ["Credenciais inválidas"]
        });
      }

      if (!user.validPassword(password)) {
        res.status(401).json({
          errors: ["Senha inválida"]
        });
      } else {
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

        return res.json(token);
      }

      return res.json(user);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}

module.exports = new TokenController();
