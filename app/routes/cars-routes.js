'use strict';

const express = require('express');
const router = express.Router();
const getCars = require('../controllers/cars/get-cars-controller');
const getCarById = require('../controllers/cars/get-car-by-id-controller');
const validateAuth = require('../middlewares/validate-auth');
const createReviewByCarId = require('../controllers/cars/create-review-by-car-id-controller');
const getReviewsByCarId = require('../controllers/cars/get-reviews-by-car-id');

// Endpoints publicos
router.route('/').get(getCars);
router.route('/:id').get(getCarById);
router.route('/:carId/reviews').get(getReviewsByCarId);
// Endpoints Privados
router.
  route('/:carId/reviews').all(validateAuth).post(createReviewByCarId);

module.exports = router;