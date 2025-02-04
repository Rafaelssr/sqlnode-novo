const express = require("express");
const cors = require("cors");

const userRoutes = require("../server/src/routes/userRoutes");
const tokenRoutes = require("../server/src/routes/tokenRoutes");
const postRoutes = require("../server/src/routes/postRoutes");
const likeRoutes = require("../server/src/routes/likeRoutes");

require("../server/src/database/index");
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
    this.app.use("/post/:id", likeRoutes);
  }
}

module.exports = new App().app;
