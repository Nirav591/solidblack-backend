const db = require('../config/db');

exports.createUser = async (email, hashedPassword) => {
  const [result] = await db.execute(
    'INSERT INTO authUsers (email, password, role) VALUES (?, ?, ?)',
    [email, hashedPassword, 'admin']
  );
  return result;
};

exports.getUserByEmail = async (email) => {
  const [rows] = await db.execute('SELECT * FROM authUsers WHERE email = ?', [email]);
  return rows[0];
};
