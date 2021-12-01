'use strict';

const express = require('express');
const router = express.Router();
const createReviewByCarId = require('../controllers/cars/create-review-by-car-id-controller');
const getCarById = require('../controllers/cars/get-car-by-id-controller');
const getCars = require('../controllers/cars/get-cars-controller');
const getReviewsByCarId = require('../controllers/cars/get-reviews-by-car-id');
const getAverageRatingByCarId = require('../controllers/cars/get-average-rating-by-car-id-controller');
const uploadCarImageById = require('../controllers/cars/upload-car-image-by-id-controller');
const validateAuth = require('../middlewares/validate-auth');

// Endpoints Publicos
router.route('/').get(getCars);
router.route('/:id').get(getCarById);
router.route('/:carId/reviews').get(getReviewsByCarId);
router.route('/:carId/rating').get(getAverageRatingByCarId);
// Endpoints Privados
router.route('/:carId/reviews').all(validateAuth).post(createReviewByCarId);
router.route('/:carId/images').all(validateAuth).post(uploadCarImageById);

module.exports = router;