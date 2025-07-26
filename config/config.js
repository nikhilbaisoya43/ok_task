require("dotenv").config(); // Load environment variables

module.exports = {
  "development": {
    "username": "neondb_owner",
    "password": "npg_onIt9ly7PzgB",
    "database": "neondb", // Change this to your desired database name
    "host": "ep-flat-heart-adwgyiaa-pooler.c-2.us-east-1.aws.neon.tech",
    "port": 5432,
    "dialect": "postgres",
    "dialectOptions": {
      "ssl": {
        "require": true,
        "rejectUnauthorized": false
      }
    }
  }
};
