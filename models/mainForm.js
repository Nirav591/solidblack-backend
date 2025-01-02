const db = require('../config/db');

// Create User
const createUser = async (user) => {
  const query = `INSERT INTO users (fullName, email, phoneNumber, country, service, qualifications, comments) VALUES (?, ?, ?, ?, ?, ?, ?)`;
  const values = [
    user.fullName,
    user.email,
    user.phoneNumber,
    user.country,
    user.service,
    user.qualifications,
    user.comments
  ];
  const [result] = await db.execute(query, values);
  return result;
};

// Get All Users
const getAllUsers = async () => {
    const query = `SELECT * FROM users`;
    const [rows] = await db.execute(query);
    return rows;
  };
  
  // Get User By ID
  const getUserById = async (id) => {
    const query = `SELECT * FROM users WHERE id = ?`;
    const [rows] = await db.execute(query, [id]);
    return rows[0]; // Return the first user (if exists)
  };

module.exports = { createUser, getAllUsers, getUserById };
