const { Sequelize } = require('sequelize');
require('dotenv').config();

console.log('Connecting to PostgreSQL:', process.env.DATABASE_URL);

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: console.log, // Enable SQL query logging for debugging
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection to PostgreSQL has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to PostgreSQL:', err);
  });

module.exports = sequelize;
