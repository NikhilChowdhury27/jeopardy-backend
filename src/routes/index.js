const express = require('express');
const exampleController = require('../controllers/exampleController');

const router = express.Router();

router.post('/examples', exampleController.createExample);

module.exports = router;
