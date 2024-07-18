const Redis = require('ioredis');
require('dotenv').config();

console.log('Connecting to Redis:', process.env.REDIS_URL);

const redis = new Redis(process.env.REDIS_URL);

redis.on('connect', () => {
  console.log('Connected to Redis successfully.');
});

redis.on('error', (err) => {
  console.error('Redis connection error:', err);
});

module.exports = redis;
