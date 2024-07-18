const Queue = require('bull');
const redis = require('./config/redis');

const exampleQueue = new Queue('exampleQueue', {
  redis: { host: redis.options.host, port: redis.options.port },
});

exampleQueue.process(async (job) => {
  // Job processing logic here
  console.log(`Processing job ${job.id}`);
});

module.exports = exampleQueue;
