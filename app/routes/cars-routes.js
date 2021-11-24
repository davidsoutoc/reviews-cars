'use strict';

const express = require('express');
const router = express.Router();
const getCars = require('../controllers/cars/get-cars-controller');

router.route('/').get(getCars);

module.exports = router;