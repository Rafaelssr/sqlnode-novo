const Sequelize = require("sequelize");
const config = require("../config/database");

const User = require("../models/User");
const Post = require("../models/Post");
const Like = require("../models/Likes");

const connection = new Sequelize(config);

const models = [User, Post, Like];

models.forEach((model) => {
  console.log(model, "model");
  model.init(connection);
});
models.forEach((model) => {
  if (model.associate) {
    model.associate(connection.models);
  }
});
