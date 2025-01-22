const validateSchema = (schema) => {
  return async (req, res, next) => {
    try {
      console.log("req.body :", req.body);
      const reqElements = [
        { data: req.body },
        { data: req.params },
        { data: req.query }
	  ];

      const validateElement = reqElements.forEach(element =>
        Object.keys(element.data).length > 0
      );
      if (validateElement) {
        await schema.validate(validateElement.data, { abortEarly: false });
      }

      return next();
    } catch (error) {
      console.log("erro!");
      return res.status(400).json({
		  errors:['Erro!']
	  });
    }
  };
};

module.exports = validateSchema;
