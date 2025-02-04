const { Model, DataTypes } = require("sequelize");
const bcryptjs = require("bcryptjs");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: DataTypes.STRING,
          defaultValue: ""
        },
        email: {
          type: DataTypes.STRING,
          defaultValue: "",
          unique: true
        },
        password_hash: {
          type: DataTypes.STRING,
          defaultValue: ""
        },
        password: {
          type: DataTypes.VIRTUAL,
          defaultValue: ""
        },
        profile_img: {
          type: DataTypes.STRING,
        }
      },
      {
        sequelize,
        paranoid: true,
        hooks: {
          async beforeSave(user) {
            if (user.dataValues.password) {
              user.dataValues.password_hash = await bcryptjs.hash(
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
    User.hasMany(models.Post, { foreignKey: "user_id" });
    User.hasMany(models.Likes, { foreignKey: "user_id" });
  }

  validPassword(password) {
    return bcryptjs.compare(password, this.password_hash);
  }
}

module.exports = User;
