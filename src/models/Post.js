const { Model, Sequelize } = require("sequelize");

class Post extends Model {
	static init(sequelize) {
	super.init(
	{
	id: {
		type: Sequelize.INTEGER,
		allowNull: false,
		autoIncrement: true,
		primaryKey: true
	},
	user_id: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	text: {
		type: Sequelize.TEXT,
		allowNull: false
	},
	summary: {
		type: Sequelize.TEXT,
		allowNull: false
	},
	posted_at: {
		type: Sequelize.DATE,
		allowNull: false
	},
	deleted_at: {
		type: Sequelize.DATE,
		allowNull: true
	},
	likes: {
		type: Sequelize.INTEGER,
		defaultValue: 0
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
		Post.belongsTo(models.User, { foreignKey: "id", as: "user" });
	}
}

module.exports = Post;
