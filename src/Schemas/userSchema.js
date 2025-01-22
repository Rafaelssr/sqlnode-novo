const yup = require("yup");

const userSchema = {
  storeUser: yup
    .object()
    .shape({
      name: yup
        .string()
        .min(4)
        .max(30)
        .required("É necessário inserir o nome do usuário."),
      email: yup
		  .string()
		  .email("Necessário fornecer um email válido")
        .min(16)
        .max(30)
        .required("É necessário informar um email."),
      password: yup.string().min(6).required("É necessário informar uma senha.")
    })
    .noUnknown(true, "O objeto contém campos não permitidos")
};

module.exports = userSchema;
