if (process.env.NODE_ENV !== 'production') require('dotenv').config();

module.exports = {
  PORT: process.env.PORT,
  JWT_SECRET: process.env.JWT_SECRET,
  test: {
    username: 'postgres',
    password: 'supersecret',
    database: 'DB_Thesis',
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres',
  },
  /* test: {
    username: 'root',
    password: null,
    database: 'DB_Thesis',
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql',
  }, */
  development: {
    username: 'root',
    password: null,
    database: 'DB_Thesis_RTR',
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql',
  },
};
