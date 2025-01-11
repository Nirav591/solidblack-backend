const express = require('express');
const router = express.Router();
const { addVisaRequest, getVisaRequests, getVisaRequest } = require('../controllers/visaController');

// Add Visa Request (POST)
router.post('/visa-request', addVisaRequest);

// Get All Visa Requests (GET)
router.get('/visa-request', getVisaRequests);

// Get Visa Request by ID (GET)
router.get('/visa-request/:id', getVisaRequest);

module.exports = router;
