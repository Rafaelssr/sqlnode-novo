const { Model, Sequelize } = require("sequelize");

class Likes extends Model {
	static init(sequelize) {
		super.init({
			user_id: {
				type: Sequelize.INTEGER,
				defaultValue: '',
				allowNull: false
			},
			post_id: {
				type: Sequelize.INTEGER,
				defaultValue:'',
				allowNull: false,
			},
		}, {
			sequelize,
			tableName: "post_likes",
			modelName: "Likes",
			timestamps: true,
			paranoid:true
		})
	}
	static associate(models){
		Likes.hasMany(models.Post, { foreignKey: 'post_id' , as:"post_id"});
		Likes.hasOne(models.User, { foreignKey: 'user_id', as:"user_id" });
	}
}

module.exports = new Likes();