module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable(
        "posts",
        {
          id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
          },
          user_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: "users",
              key:"id",
            },
            onUpdate: "CASCADE",
            onDelete: "CASCADE"
          },
          title: {
            type: Sequelize.TEXT,
            allowNull: false
          },
          summary: {
            type: Sequelize.TEXT,
            allowNull:false
          },
          text: {
            type: Sequelize.TEXT,
            allowNull:false
          },
          posted_at: {
            type: Sequelize.DATE,
            allowNull:true
          },
          updated_at: {
            type: Sequelize.DATE,
            allowNull: false
          },
          deleted_at: {
            type: Sequelize.DATE,
            allowNull: true
          },
          likes: {
            type: Sequelize.INTEGER,
            default: 0,
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

      await queryInterface.dropTable("posts", { transaction });
      await transaction.commit();

    } catch (error) {

      await transaction.rollback();
      throw new Error;
    }
  }
};
