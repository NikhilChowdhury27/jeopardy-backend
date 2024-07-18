const express = require('express');
const { sequelize } = require('./models');
const exampleQueue = require('./queue');
const winston = require('winston');
const routes = require('./routes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Logger configuration
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console({ format: winston.format.simple() }),
  ],
});

// Middleware to parse JSON
app.use(express.json());

// Use routes
app.use('/api', routes);

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/enqueue', (req, res) => {
  const { data } = req.body;
  exampleQueue.add({ data });
  res.send('Job added to the queue');
});

// Sync database and start server
sequelize.sync().then(() => {
  app.listen(port, () => {
    logger.info(`Server is running on port ${port}`);
  });
});
