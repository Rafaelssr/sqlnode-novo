const Sequelize = require("sequelize");
const config = require("./database");

const User = require("../models/User");
const Post = require("../models/Post");
const Like = require("../models/Likes");

const connection = new Sequelize(config);

const models = [User, Post, Like];

models.forEach((model) => model.init(connection));
models.forEach((model) => {
  if (model.associate) {
    model.associate(connection.models);
  }
});

module.exports = { ...connection.models, sequelize: connection };
