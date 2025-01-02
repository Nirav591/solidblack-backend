const Joi = require('joi');

exports.signupValidator = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  confirmPassword: Joi.ref('password'),
});

exports.signinValidator = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
