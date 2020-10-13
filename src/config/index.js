if (process.env.NODE_ENV !== 'production') require('dotenv').config();

module.exports = {
  PORT: process.env.PORT,
  development: {
    username: 'root',
    password: null,
    database: 'DB_Thesis',
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql',
    // dialectOptions: {
    //   bigNumberStrings: true
    // }
  },
};
