const express = require('express');
const { signup, signin } = require('../controllers/authController');
const { signupValidator, signinValidator } = require('../validators/authValidators');
const { validate } = require('../utils/validation'); // Use a validation utility

const router = express.Router();

router.post('/signup', validate(signupValidator), signup);
router.post('/signin', validate(signinValidator), signin);

module.exports = router;
