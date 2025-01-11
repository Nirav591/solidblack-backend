const { createVisaRequest, checkVisaRequestExists } = require('../models/visaModel');

// Add Visa Request (POST)
const addVisaRequest = async (req, res) => {
  const { fullName, email, phoneNumber } = req.body;

  // Debugging: Check if all required fields are available
  console.log('Full Name:', fullName);
  console.log('Email:', email);
  console.log('Phone Number:', phoneNumber);

  // Validate fields
  if (!fullName || !email || !phoneNumber) {
    return res.status(400).json({ message: "All fields (fullName, email, phoneNumber) are required" });
  }

  try {
    // Check if visa request already exists by email or phone number
    const visaRequestExists = await checkVisaRequestExists(email, phoneNumber);

    if (visaRequestExists) {
      return res.status(400).json({ message: 'Visa request with this email or phone number already exists' });
    }

    // Create a new visa request
    const visaRequest = { fullName, email, phoneNumber };  // Only include the necessary data
    const result = await createVisaRequest(visaRequest);

    res.status(201).json({ message: 'Visa request created successfully', id: result.insertId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { addVisaRequest };
