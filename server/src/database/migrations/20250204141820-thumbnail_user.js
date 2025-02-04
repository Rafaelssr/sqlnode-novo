module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.addColumn(
        "users",
        "profile_img",
        {
          type: Sequelize.STRING,
          allowNull: true,
          after: "created_at"
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
      await queryInterface.removeColumn("users", "profile_img", {
        transaction
      });
      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }
};
