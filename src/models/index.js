const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/databse');

const Example = sequelize.define('Example', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = {
  sequelize,
  Example,
};
