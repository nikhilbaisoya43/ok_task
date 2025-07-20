require("dotenv").config(); // Load environment variables

module.exports = {
  "development": {
    "username": "postgres",
    "password": "nikhil",
    "database": "public", // Change this to your desired database name
    "host": "127.0.0.1",
    "port": 5432,
    "dialect": "postgres",
    "dialectOptions": {
      "ssl": false
    }
  }
};
