const express = require("express");
const cors = require("cors");

const userRoutes = require("../routes/userRoutes");
const tokenRoutes = require("../routes/tokenRoutes");
const postRoutes = require("../routes/postRoutes");
const likeRoutes = require("../routes/likeRoutes");

require("../database/index");
class App {
  constructor() {
    this.app = express();
    this.app.use(cors());
    this.middlewares();
    this.routes();
  }
  middlewares() {
    this.app.use(
      express.urlencoded({
        extended: false
      })
    );
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/users", userRoutes);
    this.app.use("/token", tokenRoutes);
    this.app.use("/post", postRoutes);
    this.app.use("/like", likeRoutes);
  }
}

module.exports = new App().app;
