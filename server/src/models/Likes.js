const { Model, DataTypes } = require("sequelize");

class Likes extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        post_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        liked_at: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW
        },
        is_deleted: {
          type: DataTypes.BOOLEAN,
          allowNull: false
        }
      },
      {
        sequelize,
        tableName: "post_likes",
        modelName: "Likes",
        timestamps: false,
        paranoid: false
      }
    );
  }
  static associate(models) {
    Likes.belongsTo(models.Post, { foreignKey: "post_id" });
    Likes.belongsTo(models.User, { foreignKey: "user_id" });
  }
}

module.exports = Likes;
