const validateSchema = (schema) => {
  return async (req, res, next) => {
    try {
      console.log(req.body);
      if (req.body) {
        req.body = await schema.validate(req.body, {
          abortEarly: false
        });
      }
      if (req.params) {
        req.params = await schema.validate(req.params, {
          abortEarly: false
        });
      }
      if (req.query) {
        req.query = await schema.validate(req.query, {
          abortEarly: false
        });
      }
      return next();
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  };
};

module.exports = validateSchema;
