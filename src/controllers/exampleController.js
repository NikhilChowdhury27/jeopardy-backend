const { Example } = require('../models');
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console({ format: winston.format.simple() }),
  ],
});

exports.createExample = async (req, res) => {
  try {
    const { name } = req.body;
    const example = await Example.create({ name });
    res.status(201).json(example);
  } catch (error) {
    logger.error(error.message);
    res.status(500).json({ error: error.message });
  }
};
