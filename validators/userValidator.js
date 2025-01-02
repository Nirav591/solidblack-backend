const Joi = require('joi');

const validateUser = Joi.object({
  fullName: Joi.string().min(3).max(100).required(),
  email: Joi.string().email().required(),
  phoneNumber: Joi.string().min(10).max(15).required(),
  country: Joi.string().required(),
  service: Joi.string().required(),
  qualifications: Joi.string().allow(''),
  comments: Joi.string().allow('')
});

module.exports = { validateUser };
