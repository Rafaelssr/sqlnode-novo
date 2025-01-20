const Sequelize = require("sequelize");
const config = require("../config/database");

const User = require("./User");
const Post = require("./Post");

const connection = new Sequelize(config);

const models = [User, Post];

models.forEach((model) => model.init(connection));
models.forEach((model) => {
  if (model.associate) {
    model.associate(connection.models);
  }
});

module.exports = { ...connection.models, sequelize: connection };
