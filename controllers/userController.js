const { createUser, getAllUsers, getUserById } = require('../models/mainForm');

// Add User (POST)
const addUser = async (req, res) => {
  try {
    const user = req.body;
    const result = await createUser(user);
    res.status(201).json({ message: 'User created successfully', id: result.insertId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get All Users (GET)
const getUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get User By ID (GET)
const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await getUserById(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { addUser, getUsers, getUser };
