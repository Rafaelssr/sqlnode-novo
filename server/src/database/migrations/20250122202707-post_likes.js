module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable(
        "post_likes",
        {
          id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
          },
          user_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
          },
          post_id: {
            type: Sequelize.STRING,
            allowNull: false
          },
          liked_at: {
            type: Sequelize.DATE,
            allowNull: false
          },
          is_deleted: {
            type: Sequelize.BOOLEAN,
            allowNull: true
          }
        },
        { transaction }
      );
      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },
  async down(queryInterface) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.dropTable("post_likes", { transaction });
      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw new Error();
    }
  }
};
