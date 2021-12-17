const express = require('express');

const router = express.Router();

const bondController = require('../controllers/bondController');

router.get('/', bondController.getBondPrice);

module.exports = router;
