const yup = require("yup");

const userSchema = yup.object().shape({
	name: yup.string().required("É necessário informar um nome válido"),
	email: yup.string().email("O email não é válido").required(),
	password: yup.string("A senha não é válida").required().min(6),
})

module.exports = userSchema;

// post_id , user_id --> referenciar em ambas as tabelas