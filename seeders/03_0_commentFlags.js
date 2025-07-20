module.exports = {

  async up(queryInterface, Sequelize) {
      await queryInterface.createTable("CommentFlags", {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        flag: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        LocationId: {
          type: Sequelize.INTEGER,
          references: {
            model: "Locations", // Ensure this table exists
            key: "id"
          },
          onUpdate: "CASCADE",
          onDelete: "SET NULL"
        },
        ClientId: {
          type: Sequelize.INTEGER,
          references: {
            model: "Clients", // Ensure this table exists
            key: "id"
          },
          onUpdate: "CASCADE",
          onDelete: "SET NULL"
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.fn('NOW'),
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.fn('NOW'),
        },
      });
    },
  
    async down(queryInterface, Sequelize) {
      await queryInterface.dropTable("CommentFlags");
    },
  };
  