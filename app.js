const express = require("express");

const userRoutes = require("./src/routes/userRoutes");
const tokenRoutes = require("./src/routes/tokenRoutes");
const postRoutes = require("./src/routes/postRoutes");
const models = require("./src/models");

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();

    models.sequelize.authenticate().then(() => {
      console.log("Banco conectado");
    });
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
  }
}

module.exports = new App().app;
