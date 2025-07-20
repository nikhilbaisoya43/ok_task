require("dotenv").config();

console.log(process.env.DATABASE_NAME, "process.env.DATABASE_NAME")
const logger = require('../app/services/winstonLogger');
const Sequelize = require("sequelize");
const sequelizeServer = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT || 5432,
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    logging: false
  }
);

sequelizeServer
  .authenticate()
  .then(() => {
    logger.info(`Connection has been established successfully to Mind IT Workflow Management Database`);
    console.log(
      "Connection has been established successfully to Mind IT Workflow Management Database."
    );
  })
  .catch((error) => {
    logger.error(`Unable to connect to the database / Database connection lost`);
    console.error("Unable to connect to the Mind IT Workflow Management database: ", error);
  });

sequelizeServer
  .sync({ force: true }) // WARNING: This will drop all tables and recreate them
  .then(() => {
    console.log("✅ Database tables synchronized successfully.");
  })
  .catch((error) => {
    console.error("❌ Error synchronizing database tables:", error);
  });


console.log('sequlice config')
module.exports = sequelizeServer;


(async () => {
  // try {
  //     const tables = await sequelizeServer.getQueryInterface().showAllTables();
  //     console.log("Tables in database:", tables);
  //     const [results, metadata] = await sequelizeServer.query("SELECT * FROM admin");
  //     // return results;
  //     console.log(results,"resulr")
  // } catch (error) {
  //     console.error("Error fetching tables:", error);
  // }
})();
