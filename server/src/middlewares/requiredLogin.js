const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: [" É necessário um token válido ou não expirado"]
    });
  }

  const [, token] = authorization.split(" ");
  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    console.log(token, "token");
    const { id, email } = verified;
    req.user = { id, email };

    return next();
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
