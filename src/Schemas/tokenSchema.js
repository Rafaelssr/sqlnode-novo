const yup = require("yup");

const tokenSchema = {
  createToken: {
    body: yup.object().shape({
        email: yup
          .string()
          .required("É necessário informar o email do usuário"),
        password: yup
          .string()
          .required("É necessário informar a senha do usuário")
      })
      .noUnknown(true)
  }
};

module.exports = tokenSchema;
