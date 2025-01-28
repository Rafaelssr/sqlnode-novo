const yup = require("yup");

const likeSchema = {
  storeLike: yup
    .object()
    .shape({
      post_id: yup.number().required("É necessário que o post exista"),
      user_id: yup.number().required("É necessário que o usuário exista")
    })
    .noUnknown(true),
  deleteLike: yup
    .object()
    .shape({
      post_id: yup.number().required("É necessário que o post exista"),
      user_id: yup.number().required("É necessário que o usuário exista")
    })
    .noUnknown(true)
};

module.exports = likeSchema;
