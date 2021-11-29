'use strict';

const express = require('express');
const validateUser = require('../controllers/users/activate-user');
const router = express.Router();
const registerUser = require('../controllers/users/register-user-controller');
const loginUser = require('../controllers/users/login-user-controller');
const getUsers = require('../controllers/users/get-users-controller');
const validateAuth = require('../middlewares/validate-auth');

// TODAS LAS URLS /api/v1/users...
router.route('/').post(registerUser);
router.route('/activation').get(validateUser);
router.route('/login').post(loginUser);

router.route('/').all(validateAuth).get(getUsers);

module.exports = router;

// Endpoint Públicos
// POST api/v1/users = registerUser
// POST api/v1/users/login
// GET api/v1/users/activation?code= <== activar usuario
// Endpoints Privados
// GET api/v1/users <== solo admin
// GET api/v1/users/:id <== solo propietario
// PUT api/v1/users/:id
// PUT api/v1/users/:id/avatar
// DELETE api/v1/users/:id