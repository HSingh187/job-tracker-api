const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

// Load .env.test if NODE_ENV is 'test'
dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

const isTest = process.env.NODE_ENV === 'test';

const sequelize = new Sequelize(
  isTest ? process.env.TEST_DB_NAME : process.env.DB_NAME,
  isTest ? process.env.TEST_DB_USER : process.env.DB_USER,
  isTest ? process.env.TEST_DB_PASSWORD : process.env.DB_PASSWORD,
  {
    host: isTest ? process.env.TEST_DB_HOST : process.env.DB_HOST,
    port: isTest ? process.env.TEST_DB_PORT : process.env.DB_PORT || 5432,
    dialect: isTest ? process.env.TEST_DB_DIALECT : process.env.DB_DIALECT,
    logging: false,
  }
);

module.exports = sequelize;
