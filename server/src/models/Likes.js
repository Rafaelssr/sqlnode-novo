const { Model, Sequelize } = require("sequelize");

class Likes extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true
        },
        user_id: {
          type: Sequelize.INTEGER,
          defaultValue: "",
          allowNull: false
        },
        post_id: {
          type: Sequelize.INTEGER,
          defaultValue: "",
          allowNull: false
        }
      },
      {
        sequelize,
        tableName: "post_likes",
        modelName: "Likes",
        timestamps: true,
        paranoid: true
      }
    );
  }
  static associate(models) {
    Likes.belongsTo(models.Post, { foreignKey: "post_id" });
    Likes.belongsTo(models.User, { foreignKey: "user_id" });
  }
}

module.exports = Likes;
