const express = require('express');
const { addUser, getUsers, getUser } = require('../controllers/userController');
const { validateUser } = require('../validators/userValidator');
const validate = require('../middleware/validate');
const router = express.Router();

// POST - Add a user
router.post('/add', validate(validateUser), addUser);

// GET - Get all users
router.get('/', getUsers);

// GET - Get a specific user by ID
router.get('/:id', getUser);

module.exports = router;
