const validateSchema = (schema) => {
  return async (req, res, next) => {
    try {
      console.log("Requisição recebida:", req.body);

      if (req.body) {
        await schema.validate(req.body, { abortEarly: false });
        console.log("funcionou!");
      }
      if (req.params) {
        await schema.validate(req.params, { abortEarly: false });
      }
      if (req.query) {
        await schema.validate(req.query, { abortEarly: false });
      }

      return next();
    } catch (error) {
      return res.status(400).json({
        errors: error.errors || ["Erro na validação dos dados"]
      });
    }
  };
};

module.exports = validateSchema;
