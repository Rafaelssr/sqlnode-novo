const { Model, Sequelize } = require("sequelize");
const bcryptjs = require("bcryptjs");

class User extends Model {
  validPassword(password) {
    return bcryptjs.compare(password, this.password_hash);
  }
  static init(sequelize) {
    super.init(
      {
        name: {
          type: Sequelize.STRING,
          defaultValue: ""
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: "",
          unique: true
        },
        password: {
          type: Sequelize.STRING,
          defaultValue: ""
        },
      },
      {
        sequelize,
        paranoid: true,
        tableName: "users",
        logging: console.log,
        hooks: {
          async beforeCreate(user) {
            if (user.dataValues.password) {
              user.dataValues.password = await bcryptjs.hash(
                user.dataValues.password,
                6
              );
            } else {
              throw new Error("É necessário que o usuário possua uma senha!");
            }
          }
        }
      }
    );
    return this;
  }
  static associate(models) {
	  User.hasMany(models.Post, { foreignKey: "id", as: "posts" });
  }
}

module.exports = User;
