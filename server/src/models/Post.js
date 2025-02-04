const { Model, DataTypes } = require("sequelize");

class Post extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        title: {
          type: DataTypes.STRING,
          allowNull: false
        },
        text: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        summary: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        posted_at: {
          type: DataTypes.DATE,
          allowNull: false
        },
        deleted_at: {
          type: DataTypes.DATE,
          allowNull: true
        },
        likes: {
          type: DataTypes.INTEGER,
          defaultValue: 0
        },
        post_thumbnail: {
			type: DataTypes.STRING,
        }
      },
      {
        sequelize,
        paranoid: true,
        tableName: "posts"
      }
    );
    return this;
  }
  static associate(models) {
    Post.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
    Post.hasMany(models.Likes, { foreignKey: "post_id" });
  }
}

module.exports = Post;
