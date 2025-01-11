// models/newsletterModel.js
const db = require('../config/db');

// Function to add a subscriber to the newsletter
const addSubscriber = async (email) => {
  const query = 'INSERT INTO newsletter_subscribers (email) VALUES (?)';
  const [result] = await db.execute(query, [email]);
  return result;
};

// Function to check if the email already exists
const isEmailExists = async (email) => {
  const query = 'SELECT * FROM newsletter_subscribers WHERE email = ?';
  const [rows] = await db.execute(query, [email]);
  return rows.length > 0;
};

// Function to get all subscribers
const getAllSubscribers = async () => {
  const query = 'SELECT * FROM newsletter_subscribers';
  const [rows] = await db.execute(query);
  return rows;
};

module.exports = {
  addSubscriber,
  isEmailExists,
  getAllSubscribers
};
