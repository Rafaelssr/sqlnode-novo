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
        .max(30)
        .required(),
		password:
			yup
			.string()
			.min(6)
			.required("É necessário informar uma senha.")
    })
    .noUnknown(true)
};

module.exports = userSchema;
