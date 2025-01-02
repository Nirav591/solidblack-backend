const db = require('../config/db');

// Check if visa request with the same email or phone number exists
const checkVisaRequestExists = async (email, phoneNumber) => {
  const query = `SELECT * FROM visa_requests WHERE email = ? OR phoneNumber = ?`;
  const [rows] = await db.execute(query, [email, phoneNumber]);
  return rows.length > 0; // Returns true if request exists, otherwise false
};

// Create a new visa request
const createVisaRequest = async (visaRequest) => {
  const query = `INSERT INTO visa_requests (fullName, email, phoneNumber, country, service, qualifications, comments) 
                 VALUES (?, ?, ?, ?, ?, ?, ?)`;
  const values = [
    visaRequest.fullName,
    visaRequest.email,
    visaRequest.phoneNumber,
    visaRequest.country,
    visaRequest.service,
    visaRequest.qualifications,
    visaRequest.comments
  ];
  const [result] = await db.execute(query, values);
  return result;
};

// Get all visa requests
const getAllVisaRequests = async () => {
  const query = `SELECT * FROM visa_requests`;
  const [rows] = await db.execute(query);
  return rows;
};

// Get a specific visa request by ID
const getVisaRequestById = async (id) => {
  const query = `SELECT * FROM visa_requests WHERE id = ?`;
  const [rows] = await db.execute(query, [id]);
  return rows[0]; // Return the first visa request (if exists)
};

module.exports = { checkVisaRequestExists, createVisaRequest, getAllVisaRequests, getVisaRequestById };
